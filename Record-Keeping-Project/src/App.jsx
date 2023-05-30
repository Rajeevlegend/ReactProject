import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

function App() {
  const [form, setFrom] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    setFrom(form);
  };

  const removeItem = (idx) => {
    let arr = data;
    arr.splice(idx, 1);
    setData([...arr]);
  };

  return (
    <div className="App">
      <Header />
      {/* Form */}
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onChange={(e) => setFrom({ ...form, name: e.target.value })}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(e) => setFrom({ ...form, email: e.target.value })}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* Data */}
      <div className="data">
        <div className="data_val">
          <h4>name</h4>
          <h4>email</h4>
          <h4>remove</h4>
        </div>

        {data.map((elem, idx) => {
          return (
            <div key={idx} className="data_val">
              <h4>{elem.name}</h4>
              <h4>{elem.email}</h4>
              <Stack>
                <Button
                  onClick={() => removeItem(idx)}
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
