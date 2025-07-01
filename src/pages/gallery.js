import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="Meca Edge Studio - Gallery"
        description="Galería de proyectos y trabajos realizados por Meca Edge Studio."
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
