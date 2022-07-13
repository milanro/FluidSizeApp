
# Sizes application

With this application we are able to send SharedPropertyTree message with the required size.
The size can be entered in the text field beside the button 'Big Commit'.
Pressing the 'Big Commit' button sends the message to Fluid.

The default configuration points to the tinylicious client on the localhost. In order to change
the fluid server, the file

``` 

src/config/fluidAccess.ts
```
must be edited before the build to fabricate the proper AzureClient.



# Getting Started

Needed dependencies

```
$ node --version
v16.13.1

$ npm --version
8.1.2
```
or higher.

## Clone
git clone https://github.com/milanro/FluidSizeApp.git

## Build

```sh
cd FluidSizeApp
npm run clean
npm i
npm run build
```
## Run

```

npm start
```
In browser, enter http://localhost:3000


