const xlsx = require("xlsx");

const processEmployeeData = (filePath) => {
const workbook = xlsx.readFile(filePath);

const sheet_name = workbook.SheetNames[0];
// console.log('sheet name: ',sheetName);

const sheet = workbook.Sheets[sheet_name];
// console.log("sheet: ",sheet);

const data = xlsx.utils.sheet_to_json(sheet);
console.log("data: ", data);

const new_data = add_new_columns(data);
updtate_file(new_data);
  //   console.log("data: ", res);
};

const calc_bonus_for_employee = (obj) => {
  let bonus_percentage = 0;
  let bonus_amount = 0;
  let { AnnualSalary:salary } = obj;

  if (salary < 50000) {
    bonus_amount = salary * 0.5;
    bonus_percentage = "5%";
  } else if (salary >= 50000 && salary < 100000) {
    bonus_amount = salary * 0.7;
    bonus_percentage = "7%";
  } else if (salary >= 100000) {
    bonus_amount = salary * 0.1;
    bonus_percentage = "10%";
  } else {
    bonus_percentage = "0%";
    bonus_amount = 0;
  }

  return { bonus_percentage, bonus_amount };
};

const add_new_columns = (data) => {
  let res;
  res = data.map((obj) => {
    let { bonus_percentage, bonus_amount } = calc_bonus_for_employee(obj);

    return {
      ...obj,
      bonusPercentage: bonus_percentage,
      bonusAmount: bonus_amount,
    };
  });

  //console.log("data: ", res);

  return res;
};

const updtate_file = (new_data) => {
  const new_workbook = xlsx.utils.book_new();
  const new_worksheet = xlsx.utils.json_to_sheet(new_data);
  xlsx.utils.book_append_sheet(new_workbook, new_worksheet, "new_data");
  xlsx.writeFile(new_workbook, "new_employee_data.xlsx");
};

processEmployeeData("employeeData.xlsx");
