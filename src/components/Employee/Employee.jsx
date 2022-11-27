import "./Employee.css";
import { Columns, Image, Content } from "react-bulma-components";

const Employee = ({ employee }) => {
  const { name, age, image, email } = employee;
  return (
    <Columns className="employee">
      <Columns.Column size={3}>
        <Image className="py-2" rounded size={96} src={image} alt="" />
      </Columns.Column>
      <Columns.Column size={8} offset={1}>
        <Content className="px-1 pb-1">
          <h5 className="mb-1 pt-4">{name}</h5>
          <p>
            <div className="pb-1">{age} years old</div>
            <a href={"mailto:" + email}>{email}</a>
          </p>
        </Content>
      </Columns.Column>
    </Columns>
  );
};

export default Employee;
