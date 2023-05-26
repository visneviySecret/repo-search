import { TailSpin } from 'react-loader-spinner'

function Loader() {
    return (
        <div style={{ marginLeft: '600px', marginTop: '30vh' }}>
            <TailSpin height="80" width="80" />
        </div>
    )
}

export default Loader
