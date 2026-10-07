const XLSX = require('xlsx');
const path = require('path');

function readExcel(fileName, sheetName) {

    const filePath = path.join(
        __dirname,
        '..',
        'test-data',
        fileName
    );

    const workbook = XLSX.readFile(filePath);

    const worksheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(worksheet);

    return data.map(row => {

        for (const key in row) {
            row[key] = String(row[key]);
        }

        return row;
    });
}

module.exports = readExcel;