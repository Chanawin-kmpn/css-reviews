import React from "react";

const ExampleBox = ({ children, style }: { children?: any; style?: any }) => (
  <div
    style={{
      ...style,
      margin: "10px 0",
      padding: "10px",
      border: "1px solid #ddd",
    }}
  >
    {children}
  </div>
);

const CodeExample = ({ code, children }: { code: any; children: any }) => (
  <div className="mb-6">
    <div className="mb-4 rounded-md bg-stone-900 p-4">
      <pre className="text-sm">
        <code>{code}</code>
      </pre>
    </div>
    <p className="mb-2 font-semibold">ผลลัพธ์:</p>
    {children}
  </div>
);

const FlowLayoutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-200">
        Flow Layout ใน CSS
      </h1>

      <div className="mb-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-300">
          Flow Layout
        </h2>
        <p className="mb-4">
          Flow Layout เป็นโหมดการจัดวางเริ่มต้นใน CSS
          ซึ่งจะจัดวางองค์ประกอบตามลำดับที่ปรากฏในโค้ด HTML
          โดยมีองค์ประกอบหลักสองประเภท:
        </p>
        <ol className="mb-4 list-inside list-decimal space-y-2">
          <li>
            <strong className="text-blue-200">Block Elements:</strong>{" "}
            องค์ประกอบที่ใช้พื้นที่เต็มความกว้างที่มีอยู่และขึ้นบรรทัดใหม่
          </li>
          <li>
            <strong className="text-blue-200">Inline Elements:</strong>{" "}
            องค์ประกอบที่ไหลไปตามเนื้อหาและไม่ขึ้นบรรทัดใหม่
          </li>
        </ol>

        <h3 className="mb-2 text-xl font-semibold text-blue-300">
          Block Elements
        </h3>
        <p className="mb-4">
          Block elements จะใช้พื้นที่เต็มความกว้างที่มีอยู่และขึ้นบรรทัดใหม่เสมอ
          ตัวอย่างเช่น &lt;div&gt;, &lt;p&gt;, &lt;h1&gt; - &lt;h6&gt;
        </p>
        <CodeExample
          code={`  
<div style="background-color: #ff6b6b; padding: 10px; margin-bottom: 10px;">  
  นี่คือ Block Element  
</div>  
<p style="background-color: #4ecdc4; padding: 10px;">  
  นี่ก็เป็น Block Element เช่นกัน  
</p>  
        `}
        >
          <ExampleBox>
            <div
              style={{
                backgroundColor: "#ff6b6b",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              นี่คือ Block Element
            </div>
            <p style={{ backgroundColor: "#4ecdc4", padding: "10px" }}>
              นี่ก็เป็น Block Element เช่นกัน
            </p>
          </ExampleBox>
        </CodeExample>

        <h3 className="mb-2 text-xl font-semibold text-blue-300">
          Inline Elements
        </h3>
        <p className="mb-4">
          Inline elements จะไหลไปตามเนื้อหาและไม่ขึ้นบรรทัดใหม่ ตัวอย่างเช่น
          &lt;span&gt;, &lt;a&gt;, &lt;strong&gt;
        </p>
        <CodeExample
          code={`  
<p>  
  นี่คือข้อความปกติ กับ   
  <span style="background-color: #feca57; padding: 2px;">Inline Element</span>   
  อยู่ในประโยค  
</p>  
        `}
        >
          <ExampleBox>
            <p>
              นี่คือข้อความปกติ กับ
              <span style={{ backgroundColor: "#feca57", padding: "2px" }}>
                Inline Element
              </span>
              อยู่ในประโยค
            </p>
          </ExampleBox>
        </CodeExample>

        <h3 className="mb-2 text-xl font-semibold text-blue-300">
          Inline-block Elements
        </h3>
        <p className="mb-4">
          Inline-block elements เป็นการผสมผสานระหว่างคุณสมบัติของ Block และ
          Inline โดยสามารถกำหนดความกว้างและความสูงได้
          แต่ยังคงอยู่ในบรรทัดเดียวกัน
        </p>
        <CodeExample
          code={`  
<span style="display: inline-block; width: 100px; height: 100px; background-color: #54a0ff; margin-right: 10px;"></span>  
<span style="display: inline-block; width: 100px; height: 100px; background-color: #5f27cd;"></span>  
        `}
        >
          <ExampleBox>
            <span
              style={{
                display: "inline-block",
                width: "100px",
                height: "100px",
                backgroundColor: "#54a0ff",
                marginRight: "10px",
              }}
            ></span>
            <span
              style={{
                display: "inline-block",
                width: "100px",
                height: "100px",
                backgroundColor: "#5f27cd",
              }}
            ></span>
          </ExampleBox>
        </CodeExample>
      </div>

      <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-blue-300">
          Width และ Height
        </h2>

        <h3 className="mb-2 text-xl font-semibold text-blue-300">Width</h3>
        <p className="mb-4">
          Width ใช้กำหนดความกว้างของ element โดยมีค่าเริ่มต้นเป็น auto สำหรับ
          block elements ซึ่งจะใช้พื้นที่เต็มความกว้างที่มีอยู่
        </p>
        <div className="mb-4 rounded-md bg-stone-900 p-4">
          <pre className="text-sm">
            <code>
              {`  
<div style="width: 50%; background-color: #ff6b6b; padding: 10px;">  
  ความกว้าง 50%  
</div>  
<div style="width: 200px; background-color: #4ecdc4; padding: 10px; margin-top: 10px;">  
  ความกว้าง 200px  
</div>  
              `}
            </code>
          </pre>
        </div>

        <h3 className="mb-2 text-xl font-semibold text-blue-300">Height</h3>
        <p className="mb-4">
          Height ใช้กำหนดความสูงของ element
          โดยค่าเริ่มต้นจะขึ้นอยู่กับเนื้อหาภายใน
        </p>
        <div className="mb-4 rounded-md bg-stone-900 p-4">
          <pre className="text-sm">
            <code>
              {`  
<div style="height: 100px; background-color: #feca57; padding: 10px;">  
  ความสูง 100px  
</div>  
<div style="height: 50vh; background-color: #54a0ff; padding: 10px; margin-top: 10px;">  
  ความสูง 50% ของความสูงหน้าจอ  
</div>  
              `}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          การใช้ width และ height มีผลต่อการแสดงผลของ elements ต่างๆ ใน Flow
          Layout ดังนี้:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-2">
          <li>
            <strong className="text-blue-200">Block Elements:</strong>{" "}
            สามารถกำหนด width และ height ได้อย่างอิสระ
          </li>
          <li>
            <strong className="text-blue-200">Inline Elements:</strong>{" "}
            ไม่สามารถกำหนด width และ height ได้โดยตรง
            ขนาดจะขึ้นอยู่กับเนื้อหาภายใน
          </li>
          <li>
            <strong className="text-blue-200">Inline-block Elements:</strong>{" "}
            สามารถกำหนด width และ height ได้เหมือน block elements
            แต่ยังคงวางตัวในบรรทัดเดียวกันได้
          </li>
        </ul>
      </div>
      <div className="container mx-auto text-white">
        <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-blue-300">
            Width Properties
          </h2>

          <h3 className="mb-2 text-xl font-semibold text-blue-300">
            max-width
          </h3>
          <p className="mb-4">
            max-width กำหนดความกว้างสูงสุดของ element โดยไม่ให้เกินค่าที่กำหนด
            แม้ว่าพื้นที่จะมีมากกว่า
          </p>
          <CodeExample
            code={`  
<div style="max-width: 300px; background-color: red; padding: 10px;">  
  This div has a maximum width of 300px, but can be smaller if the content allows.  
</div>  
        `}
          >
            <ExampleBox style={{ maxWidth: "300px", backgroundColor: "red" }}>
              This div has a maximum width of 300px, but can be smaller if the
              content allows.
            </ExampleBox>
          </CodeExample>

          <h3 className="mb-2 text-xl font-semibold text-blue-300">
            min-width
          </h3>
          <p className="mb-4">
            min-width กำหนดความกว้างขั้นต่ำของ element ช่วยให้ element
            มีขนาดไม่เล็กกว่าค่าที่กำหนด แม้เนื้อหาจะน้อย
          </p>
          <CodeExample
            code={`  
<div style="min-width: 200px; background-color: blue; padding: 10px;">  
  Short text  
</div>  
        `}
          >
            <ExampleBox style={{ minWidth: "200px", backgroundColor: "blue" }}>
              Short text
            </ExampleBox>
          </CodeExample>

          <h3 className="mb-2 text-xl font-semibold text-blue-300">
            fit-content
          </h3>
          <p className="mb-4">
            fit-content ปรับขนาดตามเนื้อหา แต่ไม่เกินพื้นที่ที่มี ผสมระหว่าง
            max-content และ auto
          </p>
          <CodeExample
            code={`  
<div style="width: fit-content; background-color: green; padding: 10px;">  
  This text will determine the width, but won't exceed the container's width.  
</div>  
        `}
          >
            <ExampleBox
              style={{ width: "fit-content", backgroundColor: "green" }}
            >
              This text will determine the width, but won't exceed the
              container's width.
            </ExampleBox>
          </CodeExample>

          <h3 className="mb-2 text-xl font-semibold text-blue-300">
            ความแตกต่าง
          </h3>
          <ul className="mb-4 list-disc pl-5">
            <li>max-width: จำกัดขนาดสูงสุด แต่ยอมให้เล็กลงได้</li>
            <li>min-width: กำหนดขนาดขั้นต่ำ แต่ยอมให้ใหญ่ขึ้นได้</li>
            <li>
              fit-content: ปรับขนาดตามเนื้อหาอย่างชาญฉลาด โดยไม่ล้น container
            </li>
          </ul>
        </div>

        <div className="mt-8 rounded-lg bg-stone-800 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-blue-300">
            Height Properties
          </h2>

          <p className="mb-4">การใช้งาน height ที่ถูกต้อง:</p>
          <ul className="mb-4 list-disc pl-5">
            <li>
              หลีกเลี่ยงการกำหนด height แบบตายตัว เพราะอาจทำให้เนื้อหาล้นได้
            </li>
            <li>ใช้ min-height เพื่อกำหนดความสูงขั้นต่ำ</li>
            <li>
              ใช้ percentage height ต้องกำหนด height ให้กับ parent elements ด้วย
            </li>
          </ul>

          <CodeExample
            code={`  
<style>  
  .wrapper {  
    display: flex;  
    flex-direction: column;  
    min-height: 300px;  
    border: 1px solid black;  
  }  
  .content {  
    flex: 1;  
    background-color: lightblue;  
    padding: 10px;  
  }  
  .footer {  
    background-color: lightpink;  
    padding: 10px;  
  }  
</style>  

<div class="wrapper">  
  <div class="content">I fill the available space!</div>  
  <div class="footer">I'm at the bottom</div>  
</div>  
        `}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "300px",
                border: "1px solid black",
              }}
            >
              <div
                style={{
                  flex: 1,
                  backgroundColor: "blue",
                  padding: "10px",
                }}
              >
                I fill the available space!
              </div>
              <div style={{ backgroundColor: "red", padding: "10px" }}>
                I'm at the bottom
              </div>
            </div>
          </CodeExample>
          <p className="mt-4">
            ในตัวอย่างนี้ wrapper มีความสูงขั้นต่ำ 300px content
            จะขยายตัวเต็มพื้นที่ที่เหลือ และ footer จะอยู่ด้านล่างสุดเสมอ
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlowLayoutPage;
