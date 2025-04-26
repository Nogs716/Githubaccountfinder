import styled from 'styled-components'

const Card = styled.div`
  background: #e5e7eb;
  padding: 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

const Avatar = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 9999px;
`

const Name = styled.h2`
  margin-top: 1rem;
  font-weight: bold;
`

const Line = styled.hr`
  width: 100%;
  margin: 0.5rem 0;
`

const Bio = styled.p`
  font-size: 0.875rem;
  text-align: center;
`

const LinkButton = styled.a`
  margin-top: 1rem;
  background-color: #3b7552;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
`

function GithubCardStyled({ user }) {
  return (
    <Card>
      <Avatar src={user.avatar_url} alt="Profile" />
      <Name>{user.name}</Name>
      <Line />
      <Bio>{user.bio}</Bio>
      <Line />
      <p>Repos: {user.public_repos}</p>
      <LinkButton href={user.html_url} target="_blank">Visit</LinkButton>
    </Card>
  )
}

export default GithubCardStyled
