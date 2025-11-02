import './App.css';
import { Button } from './components/Button';
import { Text } from './components/Text';
import { Dropdown } from './components/Dropdown';
import { RadioButton } from './components/RadioButton';
import { Img } from './components/Img';
import { HeroImage } from './components/HeroImage';
import { Card } from './components/Card';
import { Table } from './components/Table';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>My React Component Library</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Button</h2>
        <Button label="Click Me" />
        <Button label="Disabled Button" disabled />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Text Input</h2>
        <Text placeholder="Enter text here" />
        <Text placeholder="Disabled input" disabled />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Dropdown</h2>
        <Dropdown options={['Option 1', 'Option 2', 'Option 3']} />
        <Dropdown options={['Option 1', 'Option 2', 'Option 3']} disabled />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Radio Button</h2>
        <RadioButton label="Option A" name="example" checked />
        <RadioButton label="Option B" name="example" checked disabled />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Image</h2>
        <Img src="/happy.jpg" alt="Be Happy!" width="200px" />
        <Img src="/happy.jpg" alt="Disabled Image" width="200px" disabled />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Hero Image</h2>
        <HeroImage
          src="/happy.jpg"
          alt="Stay Happy"
          title="Welcome here!"
          subtitle="Reminder to stay happy."
        />
        <HeroImage
          src="/happy.jpg"
          alt="Disabled Hero"
          title="Disabled"
          subtitle="Disabled state"
          disabled
        />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Card</h2>
        <Card
          title="Learning everyday!"
          content="Smile Please!"
          image="/happy.jpg"
        />
        <Card
          title="Disabled Card"
          content="Cannot click"
          image="/happy.jpg"
          disabled
        />
      </section>

      <section>
        <h2>Table</h2>
        <Table
          headers={['Name', 'Age', 'Role']}
          data={[
            ['Alice', '25', 'Engineer'],
            ['Bob', '30', 'Designer'],
          ]}
          footer={['Total', '2', 'Employees']}
        />
        <Table
          headers={['Name', 'Age', 'Role']}
          data={[
            ['Charlie', '28', 'Manager'],
            ['Dana', '32', 'Designer'],
          ]}
          footer={['Total', '2', 'Employees']}
          disabled
        />
      </section>
    </div>
  );
}

export default App;
