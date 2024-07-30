import React, { useState } from 'react'
import $ from 'jquery'


function ShowUserRepos({ repos }) {
    console.log(repos)
    return (
        <>
            <h3>Repos</h3>
            <table className="table table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Created On</th>
                </tr>

                {
                    repos.map((repo, idx) =>
                        <tr>
                            <td>{repo.name}</td>
                            <td>{repo.created_at}</td>
                        </tr>
                    )
                }
            </table>
        </>
    )
}

function ShowUserInfo({ data }) {
    return (
        <div className="row">
            <div className="col-sm-6">
                {data.name}
                <p></p>
                {data.location}
                <p></p>
                {data.company}
            </div>
            <div className="col-sm-6">
                <img style={{ width: '300px', height: '300px' }}
                    src={data.avatar_url} alt={data.name}
                    title={data.name}
                    className="image image-responsive" />
            </div>
        </div>

    )
}

export default function GitUserInfo() {
    const [userId, setUserId] = useState("srikanthpragada")
    const [repos, setRepos] = useState([])
    const [data, setData] = useState({})
    const [message, setMessage] = useState('')

    function clear() {
        setData({})
        setMessage('')
        setData({})
        setRepos([])
    }

    function getUserRepos() {
        clear()
        $.get(
            {
                url: `https://api.github.com/users/${userId}/repos?per_page=10&sort=created&directon=desc`,
                success: function (resp) {
                    setRepos(resp)
                },
                error: function (error) {
                    setMessage("Sorry! Invalid userid!")
                }
            }
        );
    }


    function getUserInfo() {
        clear()
        $.get(
            {
                url: `https://api.github.com/users/${userId}`,
                success: function (resp) {
                    setData(resp)
                },
                error: function (error) {
                    setMessage("Sorry! Invalid userid!")
                    //console.log(error.responseJSON.message)
                }
            }
        );

    }

    function updateUserId(e) {
        setUserId(e.target.value)
    }

    return (
        <>
            <h1>Github User Info</h1>
            <input type="text" value={userId} onChange={updateUserId} />
            &nbsp;
            <span className="text-danger">{message}</span>
            <p></p>
            <button disabled={userId.length === 0} onClick={getUserInfo}>Get Info</button>
            <button disabled={userId.length === 0} onClick={getUserRepos}>Get Repos</button>

            <p></p>
            {data.name && <ShowUserInfo data={data} />}
            {repos && repos.length > 0 && <ShowUserRepos repos={repos} />}
        </>
    )
}
