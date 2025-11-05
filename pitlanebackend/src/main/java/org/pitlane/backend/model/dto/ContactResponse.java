package org.pitlane.backend.model.dto;

import org.pitlane.backend.model.status.ContactStatus;

public class ContactResponse {
    private ContactStatus status;
    private String message;

    public ContactResponse(ContactStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    public ContactStatus getStatus() {
        return status;
    }
    public String getMessage() {
        return message;
    }

    public void setStatus(ContactStatus status) {
        this.status = status;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}