export const getServerSideProps = async () => {
    return {
      redirect: {
        destination: '/index-2',
        permanent: true,
      },
    }
  }
  
  const HomePage = () => null
  
  export default HomePage
  