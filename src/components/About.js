import React from 'react'
import styled, { css } from 'styled-components/macro'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #143861;
    color: #fff;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Abt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 9rem 8rem;

    h1 {
        font-weight: 200;
        font-size: 30px;
    }

    p {
        font-size: 16px;
    }

    @media screen and (max-width: 1200px) {
        padding: 8rem 2rem 8rem 8rem;
    }
    
    @media screen and (max-width: 1115px) {
        padding: 7rem 2rem 8rem 8rem;
    }
    @media screen and (max-width: 1010px) {
        padding: 6rem  2rem 6rem 8rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 6rem  2rem 6rem 5rem;
    }
    @media screen and (max-width: 920px) {
        padding: 6rem  2rem 6rem 4.5rem;
    }
    @media screen and (max-width: 850px) {
        padding: 6rem 2rem 6rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 4rem 3rem;
        height: 300px;
    }

    @media screen and (max-width: 560px) {
        height: 340px;
    }

    @media screen and (max-width: 450px) {
        padding: 4rem 1.5rem;
    }
    @media screen and (max-width: 430px) {
        height: 360px;
    }
    @media screen and (max-width: 350px) {
        height: 400px;
    }
    @media screen and (max-width: 300px) {
        height: 440px;
    }
`

const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 500px;
    background: #6C76D2;

    svg {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 768px) {
        height: 450px;
    }
    
    @media screen and (max-width: 525px) {
        height: 400px;
    }

    @media screen and (max-width: 450px) {
        height: 300px;
    }
`

const About = () => {
    return (
        <Container>
            <Abt>
                <h1>About our work</h1>
                <p>A total score between 150 and 299 shows that the risk of illness in an individual is moderate. However, this result indicates that such an individual still needs to see a physician to be very sure of his/her status and obtain adequate treatment as the need arises</p>
                <p>A total score between 150 and 299 shows that the risk of illness in an individual is moderate. However, this result indicates</p>
            </Abt>
            <Image>
                <svg width="721" height="567" viewBox="0 0 721 567" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-6.10352e-05 400.088H721V568H-6.10352e-05V400.088Z" fill="#424CA6"/>
                    <path d="M267.599 389.387H213.691C199.688 389.387 188.307 378.018 188.307 364.031V284.082L158.793 274.493L171.905 180.088C172.325 175.713 172.944 171.314 173.711 167.039C187.837 88.7712 255.947 32.0042 335.634 32.0042C426.356 32.0042 500.18 105.749 500.18 196.374C500.18 197.239 500.18 198.129 500.155 199.043C500.081 203.145 499.883 207.248 499.512 211.227C498.77 221.063 497.483 232.456 496.098 244.541C493.401 268.29 490.358 295.228 490.358 319.447V455.693H297.287V419.068C297.312 402.707 283.977 389.387 267.599 389.387Z" fill="#424CA6"/>
                    <path d="M299.662 357.383H245.754C231.751 357.383 220.371 346.014 220.371 332.026V252.078L190.856 242.489L203.968 148.084C204.389 143.709 205.007 139.31 205.774 135.035C219.901 56.767 288.01 0 367.697 0C458.419 0 532.243 73.7452 532.243 164.37C532.243 165.235 532.243 166.124 532.219 167.039C532.144 171.141 531.946 175.244 531.575 179.223C530.833 189.059 529.547 200.452 528.161 212.536C525.465 236.286 522.421 263.224 522.421 287.443V423.689H329.35V387.063C329.35 370.703 316.04 357.383 299.662 357.383Z" fill="#F6F4F5"/>
                    <path d="M368.712 74.6846C353.769 74.6846 341.671 86.7695 341.671 101.696V162.047H395.753V101.696C395.753 86.7942 383.655 74.6846 368.712 74.6846Z" fill="#343F4E"/>
                    <path d="M384.247 159.762H344.217V154.275H384.247V159.762Z" fill="#F6F4F5"/>
                    <path d="M378.755 152.503H344.218V147.017H378.755V152.503Z" fill="#F6F4F5"/>
                    <path d="M373.288 145.22H344.219V139.734H373.288V145.22Z" fill="#F6F4F5"/>
                    <path d="M367.797 137.937H344.22V132.451H367.797V137.937Z" fill="#F6F4F5"/>
                    <path d="M362.305 130.679H344.22V125.192H362.305V130.679Z" fill="#F6F4F5"/>
                    <path d="M362.057 108.987C359.666 108.987 357.727 107.051 357.727 104.662C357.727 102.273 359.666 100.337 362.057 100.337C364.448 100.337 366.386 102.273 366.386 104.662C366.386 107.051 364.448 108.987 362.057 108.987Z" fill="#F6F4F5"/>
                    <path d="M373.833 95.3203C372.508 95.3203 371.433 94.2471 371.433 92.9231C371.433 91.5992 372.508 90.5259 373.833 90.5259C375.158 90.5259 376.233 91.5992 376.233 92.9231C376.233 94.2471 375.158 95.3203 373.833 95.3203Z" fill="#F6F4F5"/>
                    <path d="M384.917 107.702C383.96 107.702 383.185 106.927 383.185 105.972C383.185 105.017 383.96 104.242 384.917 104.242C385.873 104.242 386.648 105.017 386.648 105.972C386.648 106.927 385.873 107.702 384.917 107.702Z" fill="#F6F4F5"/>
                    <path d="M383.704 85.0395C383.035 85.0395 382.492 84.4974 382.492 83.8286C382.492 83.1598 383.035 82.6176 383.704 82.6176C384.374 82.6176 384.917 83.1598 384.917 83.8286C384.917 84.4974 384.374 85.0395 383.704 85.0395Z" fill="#F6F4F5"/>
                    <path d="M367.599 94.3566C366.931 94.3566 366.386 93.8129 366.386 93.1456C366.386 93.8129 365.842 94.3566 365.174 94.3566C365.842 94.3566 366.386 94.9003 366.386 95.5676C366.386 94.9003 366.931 94.3566 367.599 94.3566Z" fill="#F6F4F5"/>
                    <path d="M382.665 92.9232C382.269 92.9232 381.948 92.6019 381.948 92.2065C381.948 92.6019 381.626 92.9232 381.23 92.9232C381.626 92.9232 381.948 93.2444 381.948 93.6399C381.948 93.2444 382.269 92.9232 382.665 92.9232Z" fill="#F6F4F5"/>
                    <path d="M358.296 94.8509C357.9 94.8509 357.579 94.5296 357.579 94.1342C357.579 94.5296 357.257 94.8509 356.861 94.8509C357.257 94.8509 357.579 95.1721 357.579 95.5675C357.579 95.1721 357.9 94.8509 358.296 94.8509Z" fill="#F6F4F5"/>
                    <path d="M368.316 78.7376C367.92 78.7376 367.599 78.4163 367.599 78.0209C367.599 78.4163 367.277 78.7376 366.881 78.7376C367.277 78.7376 367.599 79.0588 367.599 79.4543C367.599 79.0588 367.92 78.7376 368.316 78.7376Z" fill="#F6F4F5"/>
                    <path d="M367.079 114.498C366.683 114.498 366.362 114.177 366.362 113.781C366.362 114.177 366.04 114.498 365.644 114.498C366.04 114.498 366.362 114.819 366.362 115.215C366.362 114.819 366.683 114.498 367.079 114.498Z" fill="#F6F4F5"/>
                    <path d="M392.24 93.6399C391.844 93.6399 391.522 93.3186 391.522 92.9232C391.522 93.3186 391.2 93.6399 390.805 93.6399C391.2 93.6399 391.522 93.9611 391.522 94.3566C391.522 93.9611 391.844 93.6399 392.24 93.6399Z" fill="#F6F4F5"/>
                    <path d="M377.321 105.972C376.926 105.972 376.604 105.651 376.604 105.255C376.604 105.651 376.282 105.972 375.886 105.972C376.282 105.972 376.604 106.293 376.604 106.689C376.579 106.293 376.901 105.972 377.321 105.972Z" fill="#F6F4F5"/>
                    <path d="M353.175 95.5675C352.779 95.5675 352.458 95.2462 352.458 94.8508C352.458 95.2462 352.136 95.5675 351.74 95.5675C352.136 95.5675 352.458 95.8888 352.458 96.2842C352.458 95.8888 352.779 95.5675 353.175 95.5675Z" fill="#F6F4F5"/>
                    <path d="M354.635 106.293C354.239 106.293 353.917 105.972 353.917 105.577C353.917 105.972 353.596 106.293 353.2 106.293C353.596 106.293 353.917 106.615 353.917 107.01C353.893 106.639 354.239 106.293 354.635 106.293Z" fill="#F6F4F5"/>
                    <path d="M360.869 127.918C360.473 127.918 360.152 127.596 360.152 127.201C360.152 127.596 359.83 127.918 359.434 127.918C359.83 127.918 360.152 128.239 360.152 128.634C360.152 128.239 360.473 127.918 360.869 127.918Z" fill="#F6F4F5"/>
                    <path d="M353.893 87.9805C353.497 87.9805 353.175 87.6592 353.175 87.2638C353.175 87.6592 352.853 87.9805 352.458 87.9805C352.853 87.9805 353.175 88.3018 353.175 88.6972C353.175 88.3018 353.497 87.9805 353.893 87.9805Z" fill="#F6F4F5"/>
                    <path d="M377.321 144.772C376.926 144.772 376.604 144.451 376.604 144.055C376.604 144.451 376.282 144.772 375.886 144.772C376.282 144.772 376.604 145.093 376.604 145.489C376.579 145.093 376.901 144.772 377.321 144.772Z" fill="#F6F4F5"/>
                    <path d="M375.862 101.746C375.664 101.746 375.515 101.598 375.515 101.4C375.515 101.598 375.367 101.746 375.169 101.746C375.367 101.746 375.515 101.894 375.515 102.092C375.515 101.894 375.664 101.746 375.862 101.746Z" fill="#F6F4F5"/>
                    <path d="M380.686 115.314C380.488 115.314 380.34 115.165 380.34 114.968C380.34 115.165 380.191 115.314 379.993 115.314C380.191 115.314 380.34 115.462 380.34 115.66C380.34 115.462 380.488 115.314 380.686 115.314Z" fill="#F6F4F5"/>
                    <path d="M376.851 88.0052C376.66 88.0052 376.505 87.8503 376.505 87.6592C376.505 87.4681 376.66 87.3132 376.851 87.3132C377.043 87.3132 377.198 87.4681 377.198 87.6592C377.198 87.8503 377.043 88.0052 376.851 88.0052Z" fill="#F6F4F5"/>
                    <path d="M365.52 82.6177C365.322 82.6177 365.174 82.4694 365.174 82.2717C365.174 82.4694 365.026 82.6177 364.828 82.6177C365.026 82.6177 365.174 82.7659 365.174 82.9636C365.199 82.7659 365.347 82.6177 365.52 82.6177Z" fill="#F6F4F5"/>
                    <path d="M386.079 78.7376C385.881 78.7376 385.733 78.5893 385.733 78.3916C385.733 78.5893 385.584 78.7376 385.387 78.7376C385.584 78.7376 385.733 78.8859 385.733 79.0836C385.733 78.8859 385.881 78.7376 386.079 78.7376Z" fill="#F6F4F5"/>
                    <path d="M383.531 125.52C383.333 125.52 383.185 125.372 383.185 125.174C383.185 125.372 383.036 125.52 382.838 125.52C383.036 125.52 383.185 125.669 383.185 125.866C383.185 125.669 383.333 125.52 383.531 125.52Z" fill="#F6F4F5"/>
                    <path d="M382.442 157.03C382.245 157.03 382.096 156.882 382.096 156.684C382.096 156.882 381.948 157.03 381.75 157.03C381.948 157.03 382.096 157.178 382.096 157.376C382.096 157.178 382.245 157.03 382.442 157.03Z" fill="#F6F4F5"/>
                    <path d="M369.602 88.4994C369.405 88.4994 369.256 88.3512 369.256 88.1534C369.256 88.3512 369.108 88.4994 368.91 88.4994C369.108 88.4994 369.256 88.6477 369.256 88.8454C369.256 88.6477 369.405 88.4994 369.602 88.4994Z" fill="#F6F4F5"/>
                    <path d="M347.757 105.231C347.559 105.231 347.411 105.082 347.411 104.885C347.411 105.082 347.262 105.231 347.064 105.231C347.262 105.231 347.411 105.379 347.411 105.576C347.411 105.404 347.559 105.231 347.757 105.231Z" fill="#F6F4F5"/>
                    <path d="M390.508 105.972C390.31 105.972 390.161 105.824 390.161 105.626C390.161 105.824 390.013 105.972 389.815 105.972C390.013 105.972 390.161 106.12 390.161 106.318C390.161 106.12 390.31 105.972 390.508 105.972Z" fill="#F6F4F5"/>
                    <path d="M386.97 110.396C386.779 110.396 386.624 110.241 386.624 110.05C386.624 109.859 386.779 109.704 386.97 109.704C387.161 109.704 387.316 109.859 387.316 110.05C387.316 110.241 387.161 110.396 386.97 110.396Z" fill="#F6F4F5"/>
                    <path d="M372.151 108.023C371.953 108.023 371.804 107.875 371.804 107.677C371.804 107.875 371.656 108.023 371.458 108.023C371.656 108.023 371.804 108.171 371.804 108.369C371.804 108.171 371.977 108.023 372.151 108.023Z" fill="#F6F4F5"/>
                    <path d="M347.411 115.932C347.213 115.932 347.064 115.783 347.064 115.586C347.064 115.783 346.916 115.932 346.718 115.932C346.916 115.932 347.064 116.08 347.064 116.277C347.089 116.08 347.237 115.932 347.411 115.932Z" fill="#F6F4F5"/>
                    <path d="M388.034 97.3716C387.836 97.3716 387.687 97.2233 387.687 97.0256C387.687 97.2233 387.539 97.3716 387.341 97.3716C387.539 97.3716 387.687 97.5199 387.687 97.7176C387.712 97.5199 387.861 97.3716 388.034 97.3716Z" fill="#F6F4F5"/>
                    <path d="M373.091 83.3838C372.893 83.3838 372.744 83.2355 372.744 83.0378C372.744 83.2355 372.596 83.3838 372.398 83.3838C372.596 83.3838 372.744 83.5321 372.744 83.7298C372.769 83.5321 372.918 83.3838 373.091 83.3838Z" fill="#F6F4F5"/>
                    <path d="M391.844 100.362C391.646 100.362 391.497 100.214 391.497 100.016C391.497 100.214 391.349 100.362 391.151 100.362C391.349 100.362 391.497 100.51 391.497 100.708C391.522 100.51 391.671 100.362 391.844 100.362Z" fill="#F6F4F5"/>
                    <path d="M388.825 86.4977C388.628 86.4977 388.479 86.3494 388.479 86.1517C388.479 86.3494 388.331 86.4977 388.133 86.4977C388.331 86.4977 388.479 86.646 388.479 86.8437C388.479 86.646 388.652 86.4977 388.825 86.4977Z" fill="#F6F4F5"/>
                    <path d="M382.393 89.1667C382.195 89.1667 382.047 89.0184 382.047 88.8207C382.047 89.0184 381.898 89.1667 381.7 89.1667C381.898 89.1667 382.047 89.315 382.047 89.5127C382.047 89.315 382.195 89.1667 382.393 89.1667Z" fill="#F6F4F5"/>
                    <path d="M379.103 80.6159C378.905 80.6159 378.756 80.4676 378.756 80.2699C378.756 80.4676 378.608 80.6159 378.41 80.6159C378.608 80.6159 378.756 80.7642 378.756 80.9619C378.756 80.7642 378.905 80.6159 379.103 80.6159Z" fill="#F6F4F5"/>
                    <path d="M374.526 111.384C374.328 111.384 374.179 111.236 374.179 111.038C374.179 111.236 374.031 111.384 373.833 111.384C374.031 111.384 374.179 111.532 374.179 111.73C374.179 111.557 374.328 111.384 374.526 111.384Z" fill="#F6F4F5"/>
                    <path d="M391.522 115.437C391.324 115.437 391.176 115.289 391.176 115.091C391.176 115.289 391.027 115.437 390.829 115.437C391.027 115.437 391.176 115.585 391.176 115.783C391.176 115.585 391.324 115.437 391.522 115.437Z" fill="#F6F4F5"/>
                    <path d="M391.176 146.898C390.978 146.898 390.829 146.749 390.829 146.552C390.829 146.749 390.681 146.898 390.483 146.898C390.681 146.898 390.829 147.046 390.829 147.244C390.829 147.071 390.978 146.898 391.176 146.898Z" fill="#F6F4F5"/>
                    <path d="M386.648 130.018C386.457 130.018 386.302 129.863 386.302 129.672C386.302 129.481 386.457 129.326 386.648 129.326C386.84 129.326 386.995 129.481 386.995 129.672C386.995 129.863 386.84 130.018 386.648 130.018Z" fill="#F6F4F5"/>
                    <path d="M381.082 133.33C380.884 133.33 380.735 133.182 380.735 132.984C380.735 133.182 380.587 133.33 380.389 133.33C380.587 133.33 380.735 133.478 380.735 133.676C380.735 133.478 380.909 133.33 381.082 133.33Z" fill="#F6F4F5"/>
                    <path d="M374.526 125.52C374.328 125.52 374.179 125.372 374.179 125.174C374.179 125.372 374.031 125.52 373.833 125.52C374.031 125.52 374.179 125.669 374.179 125.866C374.179 125.669 374.328 125.52 374.526 125.52Z" fill="#F6F4F5"/>
                    <path d="M369.231 99.0027C369.033 99.0027 368.885 98.8544 368.885 98.6567C368.885 98.8544 368.737 99.0027 368.539 99.0027C368.737 99.0027 368.885 99.151 368.885 99.3487C368.91 99.1757 369.058 99.0027 369.231 99.0027Z" fill="#F6F4F5"/>
                    <path d="M352.062 123.049C351.864 123.049 351.715 122.901 351.715 122.703C351.715 122.901 351.567 123.049 351.369 123.049C351.567 123.049 351.715 123.197 351.715 123.395C351.74 123.197 351.889 123.049 352.062 123.049Z" fill="#F6F4F5"/>
                    <path d="M387.366 114.572C386.97 114.572 386.648 114.251 386.648 113.856C386.648 114.251 386.327 114.572 385.931 114.572C386.327 114.572 386.648 114.893 386.648 115.289C386.648 114.893 386.97 114.572 387.366 114.572Z" fill="#F6F4F5"/>
                    <path d="M379.474 120.479C379.078 120.479 378.756 120.158 378.756 119.762C378.756 120.158 378.435 120.479 378.039 120.479C378.435 120.479 378.756 120.8 378.756 121.195C378.756 120.8 379.078 120.479 379.474 120.479Z" fill="#F6F4F5"/>
                    <path d="M382.814 149.74C382.418 149.74 382.096 149.418 382.096 149.023C382.096 149.418 381.775 149.74 381.379 149.74C381.775 149.74 382.096 150.061 382.096 150.456C382.096 150.086 382.418 149.74 382.814 149.74Z" fill="#F6F4F5"/>
                    <path d="M391.893 111.384C391.497 111.384 391.176 111.063 391.176 110.667C391.176 111.063 390.854 111.384 390.458 111.384C390.854 111.384 391.176 111.705 391.176 112.101C391.176 111.73 391.497 111.384 391.893 111.384Z" fill="#F6F4F5"/>
                    <path d="M367.104 125.174C366.708 125.174 366.386 124.853 366.386 124.458C366.386 124.853 366.065 125.174 365.669 125.174C366.065 125.174 366.386 125.496 366.386 125.891C366.386 125.52 366.708 125.174 367.104 125.174Z" fill="#F6F4F5"/>
                    <path d="M391.547 139.928C391.151 139.928 390.829 139.607 390.829 139.212C390.829 139.607 390.508 139.928 390.112 139.928C390.508 139.928 390.829 140.25 390.829 140.645C390.829 140.25 391.151 139.928 391.547 139.928Z" fill="#F6F4F5"/>
                    <path d="M386.351 140.645C385.956 140.645 385.634 140.324 385.634 139.928C385.634 140.324 385.312 140.645 384.917 140.645C385.312 140.645 385.634 140.966 385.634 141.362C385.634 140.966 385.956 140.645 386.351 140.645Z" fill="#F6F4F5"/>
                    <path d="M376.579 131.377C376.183 131.377 375.862 131.056 375.862 130.661C375.862 131.056 375.54 131.377 375.144 131.377C375.54 131.377 375.862 131.699 375.862 132.094C375.862 131.699 376.183 131.377 376.579 131.377Z" fill="#F6F4F5"/>
                    <path d="M380.735 111.384C379.993 111.384 379.4 110.791 379.4 110.05C379.4 110.791 378.806 111.384 378.064 111.384C378.806 111.384 379.4 111.977 379.4 112.719C379.4 112.002 379.993 111.384 380.735 111.384Z" fill="#F6F4F5"/>
                    <path d="M390.186 121.813C389.444 121.813 388.85 121.22 388.85 120.479C388.85 121.22 388.256 121.813 387.514 121.813C388.256 121.813 388.85 122.406 388.85 123.148C388.825 122.406 389.419 121.813 390.186 121.813Z" fill="#F6F4F5"/>
                    <path d="M374.501 134.763C373.759 134.763 373.165 134.17 373.165 133.429C373.165 134.17 372.571 134.763 371.829 134.763C372.571 134.763 373.165 135.356 373.165 136.098C373.165 135.356 373.759 134.763 374.501 134.763Z" fill="#F6F4F5"/>
                    <path d="M382.096 99.0027C381.354 99.0027 380.76 98.4096 380.76 97.6682C380.76 98.4096 380.166 99.0027 379.424 99.0027C380.166 99.0027 380.76 99.5959 380.76 100.337C380.735 99.6206 381.354 99.0027 382.096 99.0027Z" fill="#F6F4F5"/>
                    <path d="M360.275 87.9805C359.533 87.9805 358.939 87.3873 358.939 86.6459C358.939 87.3873 358.346 87.9805 357.604 87.9805C358.346 87.9805 358.939 88.5736 358.939 89.315C358.915 88.5983 359.509 87.9805 360.275 87.9805Z" fill="#F6F4F5"/>
                    <path d="M361.488 119.515C360.75 119.515 360.152 118.917 360.152 118.18C360.152 117.443 360.75 116.846 361.488 116.846C362.226 116.846 362.824 117.443 362.824 118.18C362.824 118.917 362.226 119.515 361.488 119.515Z" fill="#F6F4F5"/>
                    <path d="M373.165 115.931C372.423 115.931 371.829 115.338 371.829 114.597C371.829 115.338 371.235 115.931 370.493 115.931C371.235 115.931 371.829 116.525 371.829 117.266C371.804 116.525 372.423 115.931 373.165 115.931Z" fill="#F6F4F5"/>
                    <path d="M390.186 155.35C389.444 155.35 388.85 154.756 388.85 154.015C388.85 154.756 388.256 155.35 387.514 155.35C388.256 155.35 388.85 155.943 388.85 156.684C388.825 155.943 389.419 155.35 390.186 155.35Z" fill="#F6F4F5"/>
                    <path d="M399.08 163.216H338.491V159.756H399.08V163.216Z" fill="#343F4E"/>
                    <path d="M359.706 162.047V172.426H387.415V162.047H390.211V423.689H387.415V409.973H359.682V423.689H356.886V162.047H359.706ZM359.706 175.244V187.106H387.415V175.244H359.706ZM387.415 377.845V365.983H359.682V377.845H387.415ZM359.706 380.638V392.5H387.415V380.638H359.706ZM387.415 363.165V351.303H359.682V363.165H387.415ZM387.415 348.486V336.623H359.682V348.486H387.415ZM387.415 333.831V321.968H359.682V333.831H387.415ZM387.415 319.151V307.288H359.682V319.151H387.415ZM387.415 304.471V292.608H359.682V304.471H387.415ZM387.415 289.816V277.953H359.682V289.816H387.415ZM387.415 275.136V263.273H359.682V275.136H387.415ZM387.415 260.456V248.593H359.682V260.456H387.415ZM387.415 245.801V233.938H359.682V245.801H387.415ZM387.415 231.121V219.259H359.682V231.121H387.415ZM387.415 216.441V204.579H359.682V216.441H387.415ZM387.415 201.786V189.924H359.682V201.786H387.415ZM387.415 407.18V395.318H359.682V407.18H387.415Z" fill="url(#paint0_linear)"/>
                    <path d="M358.073 160.663C358.84 160.539 359.558 161.058 359.682 161.824L361.512 172.822H389.196L387.44 162.269C387.316 161.503 387.836 160.786 388.603 160.663C389.37 160.539 390.087 161.058 390.211 161.824L435.238 432.042C435.361 432.808 434.842 433.525 434.075 433.649C434.001 433.673 433.926 433.673 433.852 433.673C433.184 433.673 432.59 433.179 432.467 432.512L430.067 418.079H402.383L404.708 432.042C404.832 432.808 404.313 433.525 403.546 433.649C403.471 433.673 403.397 433.673 403.323 433.673C402.655 433.673 402.061 433.179 401.937 432.512L356.911 162.294C356.787 161.528 357.306 160.786 358.073 160.663ZM361.982 175.615L364.036 187.971H391.72L389.666 175.615H361.982ZM366.559 203.121H394.243L392.19 190.764H364.506L366.559 203.121ZM369.083 218.27H396.767L394.713 205.913H367.029L369.083 218.27ZM371.606 233.419H399.29L397.237 221.063H369.553L371.606 233.419ZM374.13 248.594H401.814L399.76 236.237H372.076L374.13 248.594ZM376.653 263.743H404.337L402.284 251.386H374.6L376.653 263.743ZM379.177 278.892H406.861L404.807 266.536H377.123L379.177 278.892ZM381.7 294.042H409.384L407.331 281.685H379.647L381.7 294.042ZM384.224 309.191H411.932L409.879 296.834H382.195L384.224 309.191ZM386.747 324.341H414.456L412.403 311.984H384.718L386.747 324.341ZM389.271 339.49H416.979L414.926 327.133H387.217L389.271 339.49ZM391.794 354.639H419.503L417.449 342.283H389.765L391.794 354.639ZM394.318 369.789H422.026L419.973 357.432H392.289L394.318 369.789ZM396.866 384.963H424.55L422.496 372.606H394.812L396.866 384.963ZM399.389 400.112H427.073L425.02 387.755H397.336L399.389 400.112ZM429.597 415.262L427.543 402.905H399.835L401.888 415.262H429.597Z" fill="#343F4E"/>
                    <path d="M274.106 414.817H283.111C282.79 414.619 282.913 414.446 283.458 414.446H286.723C287.268 414.446 288.084 414.595 288.727 414.817H295.036L290.855 412.988C288.826 412.099 288.925 411.382 291.053 411.382H301.122C303.25 411.382 306.639 412.099 308.668 412.988L312.849 414.817H319.158C318.836 414.619 318.96 414.446 319.504 414.446H322.77C323.314 414.446 324.13 414.595 324.773 414.817H333.779C334.472 414.817 335.535 415.039 336.179 415.336L375.59 432.512C376.233 432.784 376.208 433.031 375.515 433.031H366.584L367.351 433.352C367.994 433.624 367.97 433.871 367.277 433.871H364.011C363.318 433.871 362.255 433.649 361.611 433.352L360.844 433.031H330.563L331.33 433.352C331.973 433.624 331.948 433.871 331.255 433.871H327.99C327.297 433.871 326.233 433.649 325.59 433.352L324.823 433.031H315.892C315.199 433.031 314.135 432.808 313.492 432.512L274.081 415.336C273.388 415.064 273.438 414.817 274.106 414.817ZM305.897 413.013C305.328 412.766 304.412 412.568 303.819 412.568H293.749C293.156 412.568 293.131 412.766 293.7 413.013L297.881 414.842H310.103L305.897 413.013Z" fill="#131D76"/>
                    <path d="M342.611 394.28H352.68C354.808 394.28 356.564 392.55 356.564 390.4V383.307C356.564 381.182 354.833 379.427 352.68 379.427H342.611C340.483 379.427 338.727 381.157 338.727 383.307V390.4C338.752 392.525 340.483 394.28 342.611 394.28ZM352.705 382.245C353.299 382.245 353.769 382.714 353.769 383.307V390.4C353.769 390.993 353.299 391.463 352.705 391.463H342.636C342.042 391.463 341.572 390.993 341.572 390.4V383.307C341.572 382.714 342.042 382.245 342.636 382.245H352.705Z" fill="#054D67"/>
                    <path d="M317.797 431.82H377.519C378.212 431.82 378.756 431.276 378.756 430.584V388.942C378.756 388.25 378.212 387.706 377.519 387.706H317.797C317.104 387.706 316.56 388.25 316.56 388.942V430.584C316.56 431.276 317.129 431.82 317.797 431.82Z" fill="#56A5A0"/>
                    <path d="M364.061 433.871H367.326C368.019 433.871 368.563 433.327 368.563 432.635V388.102C368.563 387.41 368.019 386.866 367.326 386.866H364.061C363.368 386.866 362.824 387.41 362.824 388.102V432.635C362.824 433.303 363.393 433.871 364.061 433.871Z" fill="#054D67"/>
                    <path d="M327.99 433.871H331.255C331.948 433.871 332.492 433.327 332.492 432.635V388.102C332.492 387.41 331.948 386.866 331.255 386.866H327.99C327.297 386.866 326.753 387.41 326.753 388.102V432.635C326.753 433.303 327.297 433.871 327.99 433.871Z" fill="#054D67"/>
                    <path d="M347.658 418.87C341.783 418.87 337.02 414.112 337.02 408.243C337.02 402.374 341.783 397.616 347.658 397.616C353.533 397.616 358.296 402.374 358.296 408.243C358.296 414.112 353.533 418.87 347.658 418.87Z" fill="#F6F4F5"/>
                    <path d="M341.621 406.415H345.803V402.238H349.365V406.415H353.546V409.973H349.365V414.15H345.803V409.973H341.621V406.415Z" fill="#EC5334"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="373.562" y1="423.689" x2="373.562" y2="162.049" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F6F4F5"/>
                    <stop offset="0.162" stop-color="#F2F1F2"/>
                    <stop offset="0.3069" stop-color="#E8E7E9"/>
                    <stop offset="0.4451" stop-color="#D5D5D9"/>
                    <stop offset="0.5794" stop-color="#BCBEC3"/>
                    <stop offset="0.7107" stop-color="#9A9FA6"/>
                    <stop offset="0.84" stop-color="#727983"/>
                    <stop offset="0.9651" stop-color="#434D5B"/>
                    <stop offset="1" stop-color="#343F4E"/>
                    </linearGradient>
                    </defs>
                </svg>
            </Image>
        </Container>
    )
}

export default About
