export async function getUserRepositories(username) {
  let response = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json"
    }
  });
  let data = await response.json();
  return  data;
}
