import Database from "better-sqlite3";
import XLSX from "xlsx";
import path from "path";

// 1. Путь к вашей базе данных (исправьте название файла, если нужно)
const dbPath = path.resolve(process.cwd(),"scripts", "database.sqlite"); 

try {
    const db = new Database(dbPath, { fileMustExist: true });

    // 2. Получаем все данные из таблицы userData
    const rows = db.prepare("SELECT * FROM userData").all();

    if (rows.length === 0) {
        console.log("В таблице нет данных для экспорта.");
    } else {
        // 3. Создаем Excel книгу и лист
        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "UserData");

        // 4. Сохраняем файл
        const outputPath = `database_export.xlsx`;
        XLSX.writeFile(workbook, outputPath);

        console.log(`Готово! Файл сохранен как: ${outputPath}`);
    }

    db.close();
} catch (err) {
    console.error("Ошибка:", err.message);
}