import { useState } from 'react'
import GithubCardStyled from '../components/GithubCardStyled'

function StyledPage() {
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState(null)

  async function fetchUser() {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    setUserData(data)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="text"
        placeholder="Enter GitHub username"
        className="border p-2 rounded"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={fetchUser} className="bg-green-500 text-white px-4 py-2 rounded">Fetch User</button>
      {userData && <GithubCardStyled user={userData} />}
    </div>
  )
}

export default StyledPage
