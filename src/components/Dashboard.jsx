function Dashboard({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>You are logged in!</p> : <p>Please log in.</p>}
      {isLoggedIn ? <p>Yes/True</p> : <p>No/False</p>}
    </div>
  );
}

export default Dashboard;
