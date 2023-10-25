import { UserInterface } from "../interfaces/getUsersApiInterface";
import { useGetUsers } from "../hooks/useGetUsers";

export const UsersComponent = () => {
  const { usersData, nextPage, previousPage } = useGetUsers();

  const renderItem = (user: UserInterface) => {
    return (
      /* cuando se trabaje con React Native se recomienda que el key sea un string porque sino dará un warning. En este caso se transformará a string solo por preferencia ya que se está trabajando solo con React JS */
      <tr key={user.id.toString()}>
        <td>
          <img
            style={{ width: "50px", borderRadius: "100px" }}
            src={user.avatar}
            alt={user.first_name}
          />
        </td>
        <td>
          {user.first_name} {user.last_name}
        </td>
        <td>{user.email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios con Axios</h3>

      {!usersData.length ? (
        <p>Loading...</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {usersData.map((elementUser) => renderItem(elementUser))}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={previousPage}>
            Anteriores
          </button>
          &nbsp;
          <button className="btn btn-primary" onClick={nextPage}>
            Siguientes
          </button>
        </>
      )}
    </>
  );
};
