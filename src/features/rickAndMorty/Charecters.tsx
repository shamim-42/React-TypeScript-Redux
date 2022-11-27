import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { useFetchCharectersQuery } from './charecterAPI'
import styles from './Charecter.module.css';


export default function Charecters() {

  const charecters = useAppSelector((state) => state.charecters.allCharecters)
  const { data, error, isLoading } = useFetchCharectersQuery("1")
  console.log(data?.results)
  let allCharecters = data?.results?.map(charecter => {
    return (
      <div className={styles.singleCharecter}>
        <div className={styles.imageHolder}>
          <img src={charecter.image} alt={charecter.name} />
        </div>
        <h4 >{charecter.name}</h4>
        <p>Last Location: <br/><span>{charecter.location.name}</span> </p>
        
      </div>
    )
  })

  return (
    <>
      <div>Charecters</div>
      <div className={styles.charecterContainer}>
        {
          allCharecters
        }
      </div>


    </>


  )
}
