import "./App.css";
import { Button } from "./components/Button";
import { Text } from "./components/Text";
import { Dropdown } from "./components/Dropdown";
import { RadioButton } from "./components/RadioButton";
import { Img } from "./components/Img";
import { HeroImage } from "./components/HeroImage";
import { Card } from "./components/Card";
import { Table } from "./components/Table";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>My React Component Library</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Button</h2>
        <Button label="Click Me" />
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Text Input</h2>
        <Text placeholder="Enter text here" />
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Dropdown</h2>
        <Dropdown options={["Option 1", "Option 2", "Option 3"]} />
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Radio Button</h2>
        <RadioButton label="Option A" name="example" checked />
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Image</h2>
        <Img src="/happy.jpg" alt="Be Happy!" width="200px" />
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Hero Image</h2>
        <HeroImage
          src="/happy.jpg"
          alt="Stay Happy"
          title="Welcome here!"
          subtitle="Reminder to stay happy."
        />
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Card</h2>
        <Card
          title="Learning everyday!"
          content="Smile Please!"
          image="/happy.jpg"
        />
      </section>

      <section>
        <h2>Table</h2>
        <Table
          headers={["Name", "Age", "Role"]}
          data={[
            ["Alice", "25", "Engineer"],
            ["Bob", "30", "Designer"],
          ]}
          footer={["Total", "2", "Employees"]}
        />
      </section>
    </div>
  );
}

export default App;
