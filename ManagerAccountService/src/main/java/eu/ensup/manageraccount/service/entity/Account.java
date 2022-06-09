package eu.ensup.manageraccount.service.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Account
{
    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private double discount;
    private Date creationDate;
    @Enumerated(EnumType.STRING)
    private TypeAccount type;

    public Account(Integer id, int discount, Date creationDate, TypeAccount type) {
        this.id = id;
        this.discount = new Double(discount);
        this.creationDate = creationDate;
        this.type = type;
    }

    public void setDiscount(int discount) {
        this.discount = new Double(discount);
    }
}
