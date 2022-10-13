
export const Settings = () => {
  return (
    <>
    <div className="charts_container">
    <div className="controls_container">
        <h1 className="heading">Settings</h1>
        <form className="productivity_form">
            Show&nbsp;
        <select
            className="select"
            name="task"
            id="task"
          >
            <option defaultValue="" hidden>
              all
            </option>
          </select>
        </form>
        </div>
    </div>
    </>
  );
};

export default Settings;
