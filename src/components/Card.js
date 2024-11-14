import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

function Card (props) {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler () {
        if(likedCourses.includes(course.id)) {
            // liked from before -->so we remove like
            setLikedCourses( (prev) => prev.filter((cid) => ( cid !== course.id)));
            toast.warning("Liked Removed")
        }
        else{
            // not liked from before -->  insert like
            if(likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else{
                // non-empty
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully")
        }
    }

    return(
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
            <img src={course.image.url} alt="courses" />
            <div className='absolute w-[45px] h-[45px] bg-white rounded-full right-2 bottom-3 grid place-items-center translate-y-7'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? (<FcLike className='text-[2.3rem] text-center'/>) : (<FcLikePlaceholder className='text-[2.3rem] text-center'/>)   
                    }
                </button>
            </div>
         </div>

            <div className='p-4'>
               <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
               <p className='mt-2 text-white'>
                 {
                    course.description.length>100 ? (course.description.substr(0,100)) + "..." : (course.description)

                } 
                </p> 
            </div>

        </div>
    );
}

export default Card;