import { dbPath } from "@/shared/libs/bd";
import { createReadStream } from "fs";
import { stat } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  function nodeStreamToWeb(nodeStream: ReturnType<typeof createReadStream>) {
    return new ReadableStream({
      start(controller) {
        nodeStream.on("data", (chunk) => controller.enqueue(chunk));
        nodeStream.on("end", () => controller.close());
        nodeStream.on("error", (err) => controller.error(err));
      },
      cancel() {
        nodeStream.destroy();
      },
    });
  }

  try {
    const auth = request.headers.get("auth");

    if (auth !== process.env.SECRET) {
      return new Response("Not Implemented", { status: 501 });
    }

    const fileName = path.basename(dbPath);
    const fileStats = await stat(dbPath);

    const nodeStream = createReadStream(dbPath);
    const stream = nodeStreamToWeb(nodeStream);

    return new Response(stream, {
      headers: {
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Content-Type": "application/x-sqlite3",
        "Content-Length": fileStats.size.toString(),
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return new Response("File not found", { status: 404 });
  }
}
