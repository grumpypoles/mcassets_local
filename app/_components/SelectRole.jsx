import { getAccessType } from "@/app/_lib/data-service";

// Let's imagine your colleague already built this component 😃

async function SelectRole({ access, className, name }) {
  const roles = await getAccessType();

  return (
    <>
    <select
    name={name}
      // id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={access}
      className={className}
    >
      {/* <option value="">Select access type...</option> */}
      {roles.map((c) => (
        <option key={c.access_type} value={c.access_type}>
          {c.access_type}
        </option>
      ))}
    </select>
  
  </>
  );

}

export default SelectRole;
