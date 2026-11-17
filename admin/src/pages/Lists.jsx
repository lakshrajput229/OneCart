
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

function Lists() {

  let [list, setList] = useState([])
  let { serverUrl } = useContext(authDataContext)
  let navigate = useNavigate()

  const fetchList = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/product/list")
      setList(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  const removeList = async (id) => {
    try {
      let result = await axios.post(
        `${serverUrl}/api/product/remove/${id}`,
        {},
        { withCredentials: true }
      )

      if (result.data) {
        fetchList()
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = (item) => {
    navigate('/add', {
      state: {
        product: item
      }
    })
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white'>

      <Nav />

      <div className='w-full h-full flex items-start justify-start'>

        <Sidebar />

        <div className='w-[82%] min-h-screen lg:ml-[320px] md:ml-[230px] ml-[100px] mt-[70px] flex flex-col gap-[25px] py-[50px] overflow-x-hidden'>

          <div className='text-[28px] md:text-[40px] mb-[20px]'>
            All Listed Products
          </div>

          {
            list.length > 0 ? (

              list.map((item) => (

                <div
                  className='w-[95%] min-h-[100px] bg-slate-600 rounded-xl flex items-center gap-[10px] md:gap-[30px] p-[10px] md:px-[30px]'
                  key={item._id}
                >

                  <img
                    src={item.image1}
                    className='w-[70px] md:w-[120px] h-[80px] object-cover rounded-lg'
                    alt={item.name}
                  />

                  <div className='flex-1 flex flex-col gap-[3px] min-w-0'>

                    <div className='md:text-[20px] text-[13px] text-[#bef0f3]'>
                      {item.name}
                    </div>

                    <div className='text-[13px] md:text-[17px] text-[#bef3da]'>
                      {item.category}
                    </div>

                    <div className='text-[13px] md:text-[17px] text-[#bef3da]'>
                      ₹{item.price}
                    </div>

                  </div>

                  <div className='flex items-center gap-2'>

                    <button
                      onClick={() => handleEdit(item)}
                      className='bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-md text-sm'
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => removeList(item._id)}
                      className='bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md'
                    >
                      X
                    </button>

                  </div>

                </div>

              ))

            ) : (

              <div className='text-white text-lg'>
                No products available.
              </div>

            )
          }

        </div>

      </div>

    </div>
  )
}

export default Lists
