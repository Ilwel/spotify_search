import './styles.css'

function Card({ id, name, albumCover, albumName, artists, explict, url }) {

    return (

        <a href={url} target="blanck">

            <div className="card">
                <div className="infos">
                    <div className="names">
                        <h1>{name}</h1>
                        <h2>{albumName}</h2>
                    </div>

                    <div className="artists">
                        {artists.map(artist => <p>{artist}</p>)}
                    </div>

                    {explict ? <span>EXPLICT</span> : ''}

                </div>
                <div className="capa-player">
                    <img src={albumCover} alt="album cover" />
                    <iframe src={`https://open.spotify.com/embed/track/${id}`}
                        width="250"
                        height="250"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                    ></iframe>

                </div>


            </div>

        </a>

    )

}

export default Card