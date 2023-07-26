# Mera Gaon Meri Darohar

Here's a basic overview of how the backend is configured..

### Firestore Collections

- add_new_villages -> used for storing form-data from add-new-village page
- artist_media -> used for storing media uploaded by artists
- large_village_detail -> used for storing all the details of villages
- large_village_list -> used for storing basic info about villages
- large_village_metadata -
- large_village_suggest_edit -> used for storing suggestions made from the users
- user_data -> used for storing all the user-data(both artist and regular).
- users -> used for storing all the basic info about the user.
- village_badges -> used for storing all indibadges a user has recevied.

### Algolia Usage

- explore page and add-new-village page have algolia search embedded.

### Storage Structure

- 360_image
  - path to image will be 360_image/${village_guid}/${image_name}
  - it will store the 360 images of all villages
- artist_media
  - path to image will be artist_media/${user_id}/${image_name}
  - this will store all media related to artists
- village_details
  - path to image will be village_details/${village_guid}/${image_name}
  - this will store images of all villages
- users
  - path to image will be users/${user_id}/${image_name}
  - this will store avatars/media of all users
- large_village_suggest_edit
  - path to image will be large_village_suggest_edit/${villge_id}/${image_name}
  - this will be used for saving images that are uploaded for suggestions
