package org.pitlane.backend.services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.pitlane.backend.model.dto.ContactRequest;
import org.pitlane.backend.model.dto.ContactResponse;
import org.pitlane.backend.model.status.ContactStatus;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class ContactServices {


    @Value("${spring.mail.username}")
    private String fromAddress; // Use your configured sender email

    @Value("${pitlane.contact.to:selorenzano2@gmail.com}")
    private String toAddress; // can configure a destination in application.properties

    private final JavaMailSender mailSender;

    public ContactServices(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public ContactResponse processContact(ContactRequest request) {
        try {
            sendContactEmail(request);
        }
        catch (MessagingException e) {
            e.printStackTrace();
            return new ContactResponse(
                    ContactStatus.MESSAGING_EXCEPTION,
                    e.getMessage());
        }
        return new ContactResponse(
                ContactStatus.SUCCESS,
                "Formulario recibido correctamente");
    }

    private void sendContactEmail(ContactRequest request) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setFrom(fromAddress);
        helper.setTo(toAddress);
        helper.setSubject("Nuevo mensaje de contacto desde Pitlane Holding");

        // Only escape HTML in the 'message' field — others are already validated in the dto
        // replace to convert line breaks
        String safeMessage = escapeHtml(request.getMessage()).replace("\n", "<br>");
        String content = """
            <h2>Nuevo contacto recibido</h2>
            <p><strong>Nombre:</strong> %s</p>
            <p><strong>Email:</strong> %s</p>
            <p><strong>Teléfono:</strong> %s</p>
            <p><strong>Empresa:</strong> %s</p>
            <p><strong>Mensaje:</strong><br>%s</p>
            """.formatted(
                request.getName(),
                request.getEmail(),
                request.getNumber(),
                request.getCompany(),
                safeMessage);
        helper.setText(content, true); // true = HTML content
        mailSender.send(message);
    }

    private String escapeHtml(String text) {
        if (text == null) return "";
        return text.replace("<", "&lt;").replace(">", "&gt;");
    }
}
