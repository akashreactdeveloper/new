import React, { useState } from "react";

const integrationApps = [
  {
    name: "Google Calendar",
    description:
      "Maximize efficiency with our Google Calendar integration, where AI automatically creates events from your conversations, ensuring you never miss an important appointment.",
    logo: "https://s3-alpha-sig.figma.com/img/5ad1/33a0/1423545cee58a15df364aa7d0c8c24f7?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CBrNrGu66yts1L-5XBQimwQEcRazPR-gk~K3lZj6xcHxlhmNhXxF~zCidnqG42KbWaFQLkJmM4XoqrTgcsF-TjfiRsJL7EHdv8PVwldKvsdBUPAn~kBzItmDxjc~CfrAqHhTZ3XdsZ-AIGubEETvYBkM2j3EM9CJ88YlSOVAW4n6KC1AL6UtDGqH3tbDR5ah4KT7b0YuvkypK6gOtAd8eQnn5vGHzQNZWQ8bUsM7vVW5R8hFTfXum3RXhq~sXwZEA-pXDEDhmlvW6rgF3LvFxQZTNbFeP6672uV5988vlG28H4N44QN8HK1c86BBGXhw-sdF5EO-6T9r8-oGxydf6w__",

    status: false, // true for connected, false for not connected
  },
  {
    name: "Zoom",
    description:
      "Zoom Lorem ipsum dolor sit amet, constates odit per xime optio unde distinctio adipisci? Vol spiciatis qaxime optio unde distinctio adipisci? Voluptates totam fugiat labore in.",
    logo: "https://s3-alpha-sig.figma.com/img/0af3/1833/bc25d9d75183c6c3b1255e3338e60b7d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V7SaOL9iS4HgbDblp2kFClCHqoBukKP9wZWX9PCBIj1nE0rOzuLf-QDF2k93WgcE1JcFSxqcJ4tZfG8Xj85l7ZTu8ejZNfNX9PJqdg212luIc182RYIM62gS8K~B-qXqsMoVhsOUgOCMpN3Z2c6PuP1Y~hu~H3KxGaSLuh1xYbHzRtG3LlA3pTEZBbHz~HDd1RxwVDEbLSWKZdt1ZxOAKiqf7bnRioSpcl~rwcU2ogK0jsjEMDYiQ6~ruGVTVhZ41YHcmvcE1uGHy2KuWP5WoWRIGlrKClP9uPy4anoLFV0Ltog2RhmuLgNw7iZoI3ppYRij2qSVdXgKGjP8e7PF4Q__",
    status: false, // true for connected, false for not connected
  },
  {
    name: "Outlook Email",
    description:
      "Streamline your email process with our Outlook Email integration. AI captures key insights from conversations, assisting in effective email drafting while maintaining a comprehensive knowledge repository.",
    logo: "https://s3-alpha-sig.figma.com/img/2ce7/01e3/317cc4b29dc4a2894b960cb43f681d8e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ex6eDOjBQdGxKZXJ7TJ-I4XWwDwvfBN5X70QZ3Z~wBofgjkVLprxzUMwLzxTR2HKV98cqF~f7vztUUMR2dz1LZq0WtTgFv9XELrJtiKdxgA8VbBupz8shHkrXE~4w2vXrZhIQPTWy7GrKtBTV6PWs3yybTUUSNzYn6~etCoT7hNhknHfngffmZrkjJirnNRdwei3f~VCxFujgMp2b3bBmcWSxldkxcE3dvmH4~cEEGvzbuVhBqxn~8V6us1BYH2ZXL2C2ITm5-I7uf89q~mNcj9T6flTCkhN9xxpo5ZGlBkVE5i~VsYZ6ZdLgEaohMT3Rekp9nDZIgXf3bU4lQX-2Q__",
    status: false, // true for connected, false for not connected
  },
  {
    name: "Outlook Calendar",
    description:
      "Take control of your time with our Outlook Calendar integration. Our AI analyzes your emails and discussions, creating relevant events to keep you organized.",
    logo: "https://s3-alpha-sig.figma.com/img/58fd/0059/24fdffc0ee7340c959af0cef4c1e6c42?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KoPMIiLfvp7T1i-NG5zfTgFp5eCFvhDJ8EHHxylRrvHwafdT4V~Hdc-6Sulhm8eJrxarMDgL2udbDnWFQ8lpkKkPhKkIYCD7moP-Ycm97CkKmCphbexOvgcytJ77FrZ42rnagTQglS07SsryrxjnmYtQf4JLPFtJjI8RRdKIjQVwOrI55-Bb9ttKFBv3pt8oKUkkYx0EO1YXU6bq7t2HwQLQXhFRQTFOHDMy9dnQ2vqDI2xv2VayDbbdAUtGd5mnTnDLrgh5zFKBQdOH2n77iq6pQX7ty9AiU2hZxH~tc743J9tQOMijEUxN29LcMOObrZ-OwH3lT0G1bsx39IkVmQ__",
    status: false, // true for connected, false for not connected
  },
  {
    name: "Gmail",
    description:
      "Enhance your email experience with our Gmail integration. AI helps you draft thoughtful emails quickly and builds a personalized knowledge base for easy reference.",
    logo: "https://s3-alpha-sig.figma.com/img/c7d7/172c/54ab0ee7dd2186476bf2e6c7b808ac70?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=av1euKqADuf3Gr-Q0kIbnkSmcE1elQl3iRKsbnOmt~WfwBPc6llKExYYldjpOKl19Pm9bNre-X1P5dDpHTqUzdDok6zz78fA8~v6dPz9Rm46u~Css40S30C7fCse9db1WjDifINbYrXd4rpXHl545akdMTQGozzNfmOMBLO726Vs4ZTXw04Sdu1dPzmtz086uCCNC6AyQ7fUw0UNHZZVHT6HipKP5P4dnIwG1Zk3gWj4vksGtuR0kdHUaiB7ifJppuUgPftq8cDtd2a8SRJC~ysiT-Ll5yp4qSzFAcL8I785eUBeUXN4V5qWSsWp3e3dxAzLnIne8xj780GtUH5A-A__",
    status: false, // true for connected, false for not connected
  },
  // {
  //   name: "Zapier",
  //   description:
  //     " loream ipsum dolor sit amet, conskjsnfj kjkfj kla fakjke ma xime optio unde distinctio adipisci? Volxime optio unde distinctio adipisci? Voluptates totam fugiat labore in.",
  //   logo: "https://s3-alpha-sig.figma.com/img/0732/da10/a538af5321905bd75c6805db66c87e13?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DS3oTdcAmigV3Oju82bCEUGYraFfdz7xFbHfYoaqbvQ0HYW0esrfP7LgEaIzcKLKPjhPi4x-2phol2SPaVtFmS5GBVX~j7xUlugmX4~2jnrp3NK0Hlt5W6ukv1oF2zs10zw9a0TBC-iOdCQ1M~7-29DwKK5KfNfeMwVTLupl78OujEZ68rmGBvUSjJQvlgaYUbI~koG0et7R7HYbWs5rkX5uR8lnpbK~IHH3U4iFa9OxXkA3ZBhohKXwtVxI6TYw7RCk2Fabt-QJzzM9wuBaheaKwAxy8ZWI9PyJyG14FMa-~AizxQc7fBZH77Vdbmnnjv92sHsfBlG85TGo7qOW-w__",
  //   status: true, // true for connected, false for not connected
  // },
  // Add more apps here
];

const IntegrationApps = ({ selectedIntegrations, setSelectedIntegrations }) => {
  const handleToggleIntegration = (integrationId) => {
    setSelectedIntegrations((prev) =>
      prev.includes(integrationId)
        ? prev.filter((id) => id !== integrationId)
        : [...prev, integrationId]
    );
    console.log(selectedIntegrations);
  };

  return (
    <div className="integration-app">
      {integrationApps.map((app, index) => (
        <div className="integration-app-list" key={index}>
          <div className="integration-app-icon">
            <img src={app.logo} alt={app.name} />
            <label
              className="app-toggle"
              style={{
                backgroundColor: selectedIntegrations.includes(app.name)
                  ? "#006fb9"
                  : "#ccc",
              }}
            >
              <input
                type="checkbox"
                className="app-toggle-state"
                checked={selectedIntegrations.includes(app.name)}
                onChange={() => handleToggleIntegration(app.name)}
              />
              <div className="app-indicator"></div>
            </label>
          </div>
          <div className="integration-app-name">{app.name}</div>
          <div className="integration-app-description">{app.description}</div>
        </div>
      ))}
    </div>
  );
};

export default IntegrationApps;
