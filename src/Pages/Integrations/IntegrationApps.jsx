import React, { useState } from "react";

const integrationApps = [
  {
    name: "Google Calendar",
    description: "AI creates events from your conversations, ensuring you never miss an appointment.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/768px-Google_Calendar_icon_%282020%29.svg.png",
    status: false,
  },
  {
    name: "Zoom",
    description: "Zoom Lorem ipsum dolor sit amet, constates odit per xime optio unde distinctio adipisci?",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMykdxMhEsptbAL5zcCZFAvWnk-TxcG9LDZw&s", 
    status: false,
  },
  {
    name: "Outlook Email",
    description: "AI captures key insights from conversations, assisting in effective email drafting.",
    logo: "https://images.freeimages.com/fic/images/icons/2795/office_2013_hd/2000/outlook.png?fmt=webp&h=350", 
    status: false,
  },
  {
    name: "Outlook Calendar",
    description: "AI analyzes your emails and discussions, creating relevant events to keep you organized.",
    logo: "https://img.icons8.com/?size=100&id=WnHyYA2ecNqL&format=png&color=000000",
    status: false,
  },
  {
    name: "Gmail",
    description: "AI helps you draft thoughtful emails quickly and builds a personalized knowledge base.",
    logo: "https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png",
    status: false,
  },
  {
    name: "Zapier",
    description: "AI helps you draft thoughtful emails quickly and builds a personalized knowledge base.",
    logo: "https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/292418746_5421201827901056_3218205840316965452_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kwo7JQ6jiwcQ7kNvgFtz8lH&_nc_zt=23&_nc_ht=scontent.fixc4-1.fna&_nc_gid=AaQWceyBOgYk4qGbVJC-u8E&oh=00_AYBhk6fxj-I20lmx07W8gTL05OWDqiw4hNDSEfCy_N7QGg&oe=67996EF0",
    status: false,
  },
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
    <div className="">
      <div className="w-full flex flex-row justify-between flex-wrap px-10 mt-10">
        {integrationApps.map((app, index) => (
          <div className="flex-col border border-gray-400 border-2 rounded-2xl w-80 mb-10 p-4" key={index}>
            <div className="flex flex-row items-center justify-between">
              <img src={app.logo} alt={app.name} className="h-14 mb-2" />
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
            <div className="integration-app-name mb-2">{app.name}</div>
            <div className="integration-app-description">{app.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationApps;
