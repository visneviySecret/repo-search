import { TailSpin } from 'react-loader-spinner'

function Loader() {
    return (
        <div style={{ marginLeft: '45%', marginTop: '15svh' }}>
            <TailSpin height="80" width="80" />
        </div>
    )
}

export default Loader
