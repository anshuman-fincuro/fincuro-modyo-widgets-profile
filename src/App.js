import { useEffect, useState } from 'react';
import './App.css';
import ChangePassword from './components/ChangePassword';
import axios from "axios";
import liquidParser from './liquid/liquidParser';

function App() {

  const [userId , setUserId] = useState("");

  const ACCOUNT_URL = liquidParser.parse('{{account.url}}');
  const ACCESS_TOKEN = liquidParser.parse('{{user.access_token}}');
  const realm = liquidParser.parse('{{site.realm}}');
  const PROFILE_URL = liquidParser.parse('{{vars.profileapiurl}}')
    ? liquidParser.parse('{{vars.profileapiurl}}') : `/api/customers/realms/${realm}/me`
  if (ACCESS_TOKEN) {
    axios.defaults.headers.common.Authorization = `Bearer ${ACCESS_TOKEN}`;
  }
  useEffect(() => {
    axios.get(`${ACCOUNT_URL}${PROFILE_URL}`).then((res) => {
      console.log(res)
      console.log(res.data.custom_fields[0].value)
      setUserId(res.data.custom_fields[0].value)
    })
  }, [])

  return (
    <div>
      <ChangePassword userId={userId}/>
    </div>
  );
}

export default App;
