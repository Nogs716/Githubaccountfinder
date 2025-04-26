function GithubCardTailwind({ user }) {
    return (
      <div className="bg-gray-200 p-6 rounded-lg flex flex-col items-center w-64 shadow-md">
        <img src={user.avatar_url} alt="Profile" className="rounded-full w-24 h-24" />
        <h2 className="mt-4 font-bold">{user.name}</h2>
        <hr className="w-full my-2" />
        <p className="text-sm text-center">{user.bio}</p>
        <hr className="w-full my-2" />
        <p>Repos: {user.public_repos}</p>
        <a href={user.html_url} target="_blank" className="mt-4 bg-green-700 text-white px-3 py-1 rounded">Visit</a>
      </div>
    )
  }
  
  export default GithubCardTailwind
  