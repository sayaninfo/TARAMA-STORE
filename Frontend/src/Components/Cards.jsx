import React from 'react'

function Cards({item}) {
  return   (
    <>
    <div className='mt-6 my-3 p-3' >
    <div className="card w-92 bg-base-100 w-96 shadow-xl dark:bg-slate-900 dark:text-white dark:border hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Fashion" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      {/*<div className="badge badge-secondary">{item.catagory}</div>*/}
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">RS.{item.price}</div>
      <a href="/Contacts" className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-green-500 hover:text-white duration-200" >Get This</a>
    </div>
  </div>
</div>
    </div>
    </>
  )
  
}

export default Cards
