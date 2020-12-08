import React, { useEffect, useState } from "react"; // import build-in lib 
//import ReactDOM from "react-dom";
import { Pagination } from 'antd';
import request from '../lib/common'



export default function List() { // build own components to show list
    const [followers, setFollowers] = useState([])// set setfollowers null and assign new value from res.data
    const [totalFollowers, setTotalFollowers] = useState(0)
    const [url, setUrl] = useState('')// build own components to show list

    const client_id = 'Iv1.a28d83270a182327';
    const client_secret = 'be2f8d7e75a45ef8e174dfed94db5b868bc1b194';
    const ShowData = async (page, pagesize) => {
        let followers_url = url + '?per_page=' + pagesize + '&page=' + page
        let res2 = await request(followers_url)
        console.log(res2)
        console.log(res2.data)
        setFollowers(res2.data)
    } // 每次翻页，自动刷新页面，页数
    const firstLoad = async () => {
        const user = 'mosh-hamedani'
        const user_url = `https://api.github.com/users/${user}?client_id=${client_id} & client_secret=${client_secret}`
        let res = await request(user_url)
        console.log(res)
        setTotalFollowers(res.followers)
        setUrl(res.data.followers_url)
        var followers_url = res.data.followers_url
        followers_url += '?per_page=100&page=1'
        console.log(followers_url)
        let res2 = await request(followers_url)
        console.log(res2)
        console.log(res2.data)
        setFollowers(res2.data)
    }
    // 第
    useEffect(() => {
        firstLoad()
    }, [])
    return (
        <div>
            <div className="main__input-container">
                <input type="text" id="search" className="main__input" placeholder="Enter a username..." />
                <span>
                    <button onClick={ShowData} className="btn btn--shallow searchButton" id='mysearch'>Search</button>
                </span>
            </div>
            <div>
                {followers.map((el) => {
                    return <div key={el.id}> name: {el.login}</div>
                })}
            </div>
            <Pagination onChange={ShowData} defaultCurrent={1} total={totalFollowers} pageSize={100}></Pagination>
        </div>
    )
}