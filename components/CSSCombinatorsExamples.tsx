import React from "react";

const CSSCombinatorsExamples = () => {
  return (
    <div className="space-y-8">
      <div className="rounded-lg bg-stone-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-200">
          CSS Combinators ตัวอย่างและการใช้งาน
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              1. Descendant Selector (space)
            </h3>
            <pre className="rounded-md bg-stone-900 p-2">
              {`
div p {
  color: red;
}
              `}
            </pre>
            <div className="mt-2 rounded-md border p-4">
              <div>
                <p style={{ color: "red" }}>นี่คือย่อหน้าภายใน div (สีแดง)</p>
                <span>
                  <p style={{ color: "red" }}>
                    นี่ก็เป็นย่อหน้าภายใน div (สีแดง)
                  </p>
                </span>
              </div>
              <p>นี่คือย่อหน้านอก div (สีปกติ)</p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              2. Child Selector (&gt;)
            </h3>
            <pre className="rounded-md bg-stone-900 p-2">
              {`
ul > li {
  border: 1px solid blue;
}
              `}
            </pre>
            <div className="mt-2 rounded-md border p-4">
              <ul>
                <li
                  style={{
                    border: "1px solid blue",
                    padding: "4px",
                    marginBottom: "4px",
                  }}
                >
                  รายการที่ 1 (มีขอบสีน้ำเงิน)
                </li>
                <li
                  style={{
                    border: "1px solid blue",
                    padding: "4px",
                    marginBottom: "4px",
                  }}
                >
                  รายการที่ 2 (มีขอบสีน้ำเงิน)
                  <ul>
                    <li>รายการย่อย (ไม่มีขอบ)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              3. Adjacent Sibling Selector (+)
            </h3>
            <pre className="rounded-md bg-stone-900 p-2">
              {`
h1 + p {
  font-weight: bold;
}
              `}
            </pre>
            <div className="mt-2 rounded-md border p-4">
              <h1 style={{ marginBottom: "8px" }}>หัวข้อ</h1>
              <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                ย่อหน้าแรกหลังหัวข้อ (ตัวหนา)
              </p>
              <p>ย่อหน้าที่สอง (ปกติ)</p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              4. General Sibling Selector (~)
            </h3>
            <pre className="rounded-md bg-stone-900 p-2">
              {`
h1 ~ p {
  font-style: italic;
}
              `}
            </pre>
            <div className="mt-2 rounded-md border p-4">
              <h1 style={{ marginBottom: "8px" }}>หัวข้อ</h1>
              <p style={{ fontStyle: "italic", marginBottom: "8px" }}>
                ย่อหน้าแรก (ตัวเอียง)
              </p>
              <div>ข้อความในกล่อง div</div>
              <p style={{ fontStyle: "italic" }}>ย่อหน้าที่สอง (ตัวเอียง)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSCombinatorsExamples;
