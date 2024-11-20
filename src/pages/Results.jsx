import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  // เงินได้ทั้งหมด
  let salary = parseInt(formData.salary);
  let salaryOfYear = salary * 12;
  let bonus = parseInt(formData.bonus);
  let totalSalary = salaryOfYear + bonus;
  let expenses = totalSalary * 0.5 <= 100000 ? totalSalary * 0.5 : 100000;

  // ค่าลดหย่อน
  let me = 60000;
  let children = parseInt(formData.children) * 30000 <= 60000? parseInt(formData.children) * 30000 : 60000;
  let social = parseInt(formData.social);
  let socialOfyear = social * 12 <= 30000 ? social * 12 : 30000;
  let life = parseInt(formData.life) <= 100000 ? parseInt(formData.life) : 100000;
  let deduction = me + children + socialOfyear + life;

  // เงินได้พึงประเมิน
  let income = totalSalary - expenses - deduction;

  // อัตราภาษี
  let taxRate = 0;
  if (income <= 100000) {
    taxRate = 0;
  } else if (income <= 300000) {
    taxRate = 0.05;
  } else if (income <= 1000000) {
    taxRate = 0.10;
  } else {
    taxRate = 0.15;
  }

  // ภาษีที่ต้องชำระ
  let taxPay = taxRate * income;

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="container max-w-lg bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6">ผลการคำนวณ</h1>
        <p className="text-gray-500 text-center mb-6">
          ------------------------------------------------------------
        </p>
        <div className="space-y-4">
          <p className="text-lg">
            <strong>เงินได้ทั้งปี:</strong>{" "}
            <span className="text-blue-600">{salaryOfYear.toLocaleString()} บาท</span>
          </p>
          <p className="text-lg">
            <strong>ค่าใช้จ่าย:</strong>{" "}
            <span className="text-blue-600">{expenses.toLocaleString()} บาท</span>
          </p>
          <p className="text-lg">
            <strong>ค่าลดหย่อน:</strong>{" "}
            <span className="text-blue-600">{deduction.toLocaleString()} บาท</span>
          </p>
          <p className="text-lg">
            <strong>เงินได้พึงประเมินสุทธิ:</strong>{" "}
            <span className="text-blue-600">{income.toLocaleString()} บาท</span>
          </p>
          <p className="text-lg">
            <strong>อัตราภาษี:</strong>{" "}
            <span className="text-blue-600">{(taxRate * 100).toFixed(2)} %</span>
          </p>
          <p className="text-lg">
            <strong>ภาษีที่ต้องชำระ:</strong>{" "}
            <span className="text-red-500 font-bold">{taxPay.toLocaleString()} บาท</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
