import './styles.css'

function Card({ name, albumCover, albumName, artists, explict, url }) {

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

                <img src={albumCover} alt="album cover" />

            </div>

        </a>

    )

}

export default Card