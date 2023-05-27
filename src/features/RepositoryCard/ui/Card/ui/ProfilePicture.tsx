import EmptyProfilePicture from '../assets/EmptyProfilePicture'

function ProfilePicture({ url }: { url: string }) {
    if (!url) return <EmptyProfilePicture />

    return (
        <img
            src={url}
            alt="profile picture"
            style={{ width: '80px', borderRadius: '50%' }}
        />
    )
}

export default ProfilePicture
