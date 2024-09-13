const spacesUrl = ''

export const config = {
    REGION: '',
    USER_POOL_ID: '',
    APP_CLIENT_ID: '',
    IDENTITY_POOL_ID: '',
    SPACES_PHOTOS_BUCKET: '',
    PROFILE_PHOTOS_BUCKET: '',
    api: {
        baseUrl: spacesUrl,
        spacesUrl: `${spacesUrl}spaces/`,
        reservationsUrl: `${spacesUrl}reservations/`
    }
}