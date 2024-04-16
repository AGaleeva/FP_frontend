import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import InfoList from "components/InfoList/InfoList"
import NewsList from "components/NewsList/NewsList"
import { instance } from "../../utils/axios"
import { MainLowerPartContainer, MainLowerPartFlex } from "./styles"
import { title } from "process"

interface NewsProps {
  title: string
  shortDescription: string
  imgUrl: string
  content: string
}
interface InfoProps {
  link: string
  title: string
  description: string
  address: string
  tel: string
}

export interface NewsListProps {
  newsList: NewsProps[]
}
export interface InfoListProps {
  infoList: InfoProps[]
}

function MainLowerPart() {
  const location = useLocation()
  const [newsData, setNewsData] = useState<NewsProps[]>([])
  const [infoData, setinfoData] = useState<InfoProps[]>([])

  useEffect(() => {
    async function fetchNewsData() {
      try {
        let endpoint = "/general_news/except/GENERAL_INFO"
        if (location.pathname === "/") {
          endpoint = "/general_news/except/GENERAL_INFO"
        } else if (location.pathname === "/general-info") {
          endpoint = "/general_news/get_info_by/GENERAL_INFO"
        }

        const response = await instance.get<NewsProps[]>(endpoint)
        setNewsData(response.data)
      } catch (error) {
        console.error("Error fetching news data:", error)
      }
    }
    fetchNewsData()
  }, [location.pathname])

  useEffect(() => {
    async function fetchInfoData() {
      try {

        let endpoint = "/berlin/restaurants_info"
        if (location.pathname === "/berlin/cafes-restaurants") {
          endpoint = "/berlin/restaurants_info"
        } else if (location.pathname === "/berlin/children") {
          endpoint = "/berlin/children_info"
        } else if (location.pathname === "/berlin/shops") {
          endpoint = "/berlin/shops_info"
        } else if (location.pathname === "/berlin/services") {
          endpoint = "/berlin/legal_services_info"
        } else if (location.pathname === "/berlin/doctors") {
          endpoint = "/berlin/doctors_info/stomatologist"
        }

        const response = await instance.get<InfoProps[]>(endpoint)
        setinfoData(response.data)
      } catch (error) {
        console.error("Error fetching news data:", error)
      }
    }
    fetchInfoData()
  }, [location.pathname])

  return (
    <MainLowerPartContainer>
      <MainLowerPartFlex>
        {location.pathname === "/" &&
          (newsData.length > 0 ? (
            <NewsList newsList={newsData} />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/general-info" &&
          (newsData.length > 0 ? (
            <NewsList newsList={newsData} />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/cafes-restaurants" &&
          (infoData.length > 0 ? (
            <InfoList infoList={infoData} />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/children" &&
          (infoData.length > 0 ? (
            <InfoList infoList={infoData} />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/shops" &&
          (infoData.length > 0 ? (
            <InfoList infoList={infoData} />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/services" &&
          (infoData.length > 0 ? (
            <InfoList infoList={infoData} />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/doctors" &&
          (infoData.length > 0 ? (
            <InfoList infoList={infoData} />
          ) : (
            <div>Loading...</div>
          ))}
      </MainLowerPartFlex>
    </MainLowerPartContainer>
  )
}

export default MainLowerPart
