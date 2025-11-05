package org.pitlane.backend.model.dto;

public class ContactRequest {
    private String name;
    private String email;
    private String number;
    private String company;
    private String message;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getNumber() {
        return number;
    }
    public void setNumber(String number) {
        this.number = number;
    }

    public String getCompany() {
        return company;
    }
    public void setCompany(String company) {
        this.company = company;
    }

    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "ContactRequest{" +
                "nombre='" + name + '\'' +
                ", email='" + email + '\'' +
                ", telefono='" + number + '\'' +
                ", empresa='" + company + '\'' +
                ", mensaje='" + message + '\'' +
                '}';
    }
}
