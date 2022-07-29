# Pets App Client 

This is a client for our pets app. It will allow users to see and create new pets, as well as edit them and add toys for their pets.

## User Stories
* As a user, I want to be able to create an account.
* As a user, I want to be able to sign in.
* As a user, I want to be able to change my password.
* As a user, I want to be able to sign out.
* As a user, I want to be able to see all pets.
* As a user, I want to be able to see information about a specific pet.
* As a user, I want to be able to create a new pet.
* As a user, I want to be able to update my pets.
* As a user, I want to be able to rehome my pet (set them free).
* As a user, I want to be able to create a toy.
* As a user, I want to be able to give toys to any pet.
* As a user, I want to be able to update my pet's toys.
* As a user, I want to be able to delete my pet's toys.

## Views

### User Views

| Route    | Description                         |
|----------|-------------------------------------|
| /sign-up | allows user to create a new account |
| /sign-in | allows users to sign into their account |
| /sign-out | allows users to sign out of their account |
| /change-password | allows user to change their password |

### Pet Views

| Route     | Description                         |
|-----------|-------------------------------------|
| /         | pets index |
| /pets/:id | show single pet* |
| /addPet   | new pet page |

*Pet show page will have a modal for updating. 
Users will be able to delete via the show page.
Pet show page will also allow updating and deleting toys

### Toy Views

| Route    | Description   |
|----------|---------------|
| /add     | new toy page  |

### Wireframes go here!
