class Event extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setup();
    }

    eventsList = [
        {
            name: "",
            type: "",
            img: "",
            ticketSource: "#",
        }
    ];

    render() {
        const STYLE = `
            <style>

            </style>
        `
        this.innerHTML = `
            ${STYLE}
            ${(() => {
                for (const event of this.eventsList) {
                    return `
                        <div class="event">
                            <div class="event-type">${event.type}</div>
                            <img src="${event.img}" alt="event-image" class="event-img">
                            <div class="event-type event-type_plain">${event.type}</div>
                            <div class="event-name">${event.name}</div>
                            <div class="event-tickets-button">Buy Tickets &nbsp; &#10140;</div>
                        </div>
                    `
                }
            })()}
        `
    }
}