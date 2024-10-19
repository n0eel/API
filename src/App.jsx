import { useEffect, useState } from 'react'
import './App.css'
import { data } from 'autoprefixer'
import { CommentIcon, PostIcon, ProfileIcon } from './assets/images/Icons'

function App() {

  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  const [userId, setUserId] = useState(null)
  const [postId, setPostId] = useState(null)

  const URL = "https://jsonplaceholder.typicode.com"

  useEffect(() => {
    fetch(`${URL}/users`).then(res => res.json()).then(data => {
      setUsers(data)
    })
  }, [])

  useEffect(() => {
    fetch(`${URL}/posts?userId=${userId}`).then(res => res.json()).then(data => {
      setPosts(data)
    })
  }, [userId])

  useEffect(() => {
    fetch(`${URL}/posts?userId=${postId}`).then(res => res.json()).then(data => {
      setComments(data)
    })
  }, [postId])


  return (
    <>
    {/* <div className='flex justify-between space-x-5 p-5'>
      <div className='h-[95vh] overflow-y-auto border-[1px] border-black rounded-md w-[32%]'>
        <h2 className='text-center text-[22px] font-bold sticky top-0 bg-slate-500 p-3 text-white'>Users</h2>
        <ul className='space-y-3 p-3'>
          {users.map(item => (
            <li key={item.id} className='bg-slate-300 p-5 rounded-md space-y-2'>
              <strong><strong>ID</strong>: {item.id}</strong>
              <h2><strong>Name</strong>: {item.name}</h2>
              <p><strong>Email</strong>: {item.email}</p>
              <p><strong>Phone</strong>: {item.phone}</p>
              <button onClick={() => setUserId(item.id)} className='bg-green-500 w-full text-white text-center rounded-md font-bold p-2 mt-2'>Show Posts</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='h-[95vh] overflow-y-auto border-[1px] border-black rounded-md w-[32%]'>
        <h2 className='text-center text-[22px] font-bold sticky top-0 bg-slate-500 p-3 text-white'>Users</h2>
        <ul className='space-y-3 p-3'>
          {posts.map(item => (
            <li key={item.id} className='bg-slate-300 p-5 rounded-md'>
              <strong><strong>ID</strong>: {item.id}</strong>
              <div><strong>User ID</strong>: {item.userId}</div>
              <h2><strong>Title</strong>: {item.title}</h2>
              <p><strong>Body</strong>: {item.body}</p>
              <button onClick={() => setPostId(item.id)} className='bg-green-500 w-full text-white text-center rounded-md font-bold p-2 mt-2'>Show Comments</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='h-[95vh] overflow-y-auto border-[1px] border-black rounded-md w-[32%]'>
        <h2 className='text-center text-[22px] font-bold sticky top-0 bg-slate-500 p-3 text-white'>Users</h2>
        <ul className='space-y-3 p-3'>
          {comments.map(item => (
            <li key={item.id} className='bg-slate-300 p-5 rounded-md'>
              <strong><strong>ID</strong>: {item.id}</strong>
              <div><strong>Post ID</strong>: {item.postId}</div>
              <h2><strong>Name</strong>: {item.name}</h2>
              <p><strong>Email</strong>: {item.email}</p>
              <p><strong>Body</strong>: {item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div> */}
    <div className='flex justify-between'>
    
    <div className='px-10 gap-[20px] space-y-5 w-[42%] h-[90vh] overflow-y-auto'>
    <h1 className='text-center text-[#363740] bg-[#FFF8DC] sticky top-0 text-[20px] font-bold p-3'>Users</h1>
        {users.map(item => (
          <>
             <div key={item.id} className='border-[1px] border-[#FFF8DC] rounded-lg'>
              <div className='flex gap-[50px] p-5'>
              <div className='items-center flex flex-col'>
                <ProfileIcon/>
                  <strong className='flex text-white text-[15px] text-center mt-2'>Name<h1 className='font-normal'>: {item.name}</h1></strong>
                  <strong className='flex text-white text-[15px] text-center mt-2'>Id<h1 className='font-normal'>: {item.id}</h1></strong>
              </div>
              <div className='justify-center flex flex-col'>
                <strong className='flex text-white text-[12px] items-center'>Username<h2 className='font-normal '>: {item.username}</h2></strong>
                <strong className='flex text-white text-[12px] items-center'>Email<h2 className='font-normal '>: {item.email}</h2></strong>
                <strong className='flex text-white text-[12px] items-center'>Address<h2 className='font-normal '>: {item.address.city}</h2></strong>
              </div>
              </div>
              <button onClick={() => setUserId(item.id)} className='w-full bg-[#FFF8DC] text-[#363740] text-[18px] text-center p-4 mt-5 font-bold rounded-lg '>Show Posts</button>
             </div>

             </>
        ))}
    </div>

    <div className='px-10 gap-[20px] space-y-5 w-[42%] h-[90vh] overflow-y-auto'>
    <h1 className='text-center text-[#363740] bg-[#FFF8DC] sticky top-0 text-[20px] font-bold p-3'>Posts</h1>
        {posts.map(item => (
             <div key={item.id} className='p-5 border-[1px] border-[#FFF8DC] rounded-lg'>
              <div className='flex gap-[50px]'>
              <div className='justify-center flex flex-col items-center'>
                <PostIcon/>
                <strong className='flex text-white text-[15px] text-center mt-2'>Post ID<h1 className='font-normal'>: {item.userId}</h1></strong>
                <strong className='flex text-white text-[15px] text-center mt-2'>Id<h1 className='font-normal'>: {item.id}</h1></strong>
                <strong className='flex text-white text-[12px]'>Name<h2 className='font-normal '>: {item.title}</h2></strong>
                <strong className='flex text-white text-[12px]'>Body<h2 className='font-normal '>: {item.body}</h2></strong>
              </div>
              </div>
              <button onClick={() => setPostId(item.id)} className='w-full bg-[#FFF8DC] text-[#363740] text-[18px] text-center p-4 mt-5 font-bold rounded-lg '>Show Comments</button>
             </div>
        ))}
    </div>

    <div className='px-10 gap-[20px] space-y-5 w-[42%] h-[90vh] overflow-auto'>
    <h1 className='text-center text-[#363740] bg-[#FFF8DC] sticky top-0 text-[20px] font-bold p-3'>Comments</h1>
        {comments.map(item => (
             <div key={item.id} className='p-5 border-[1px] border-[#FFF8DC] rounded-lg'>
              <div className='justify-center flex flex-col items-center'>
                <CommentIcon/>
                  <strong className='flex text-white text-[15px] text-center mt-2'>Post ID<h1 className='font-normal'>: {item.postId}</h1></strong>
                  <strong className='flex text-white text-[15px] text-center mt-2'>Id<h1 className='font-normal'>: {item.id}</h1></strong>
                <strong className='flex text-white text-[12px] items-center'>Name<h2 className='font-normal '>: {item.name}</h2></strong>
                <strong className='flex text-white text-[12px] items-center'>Email<h2 className='font-normal '>: {item.email}</h2></strong>
                <strong className='flex text-white text-[12px] items-center'>Body<h2 className='font-normal '>: {item.body}</h2></strong>
              </div>
             </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default App
