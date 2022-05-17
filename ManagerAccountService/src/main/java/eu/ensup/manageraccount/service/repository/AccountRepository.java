package eu.ensup.manageraccount.service.repository;

import eu.ensup.manageraccount.service.entity.Account;
import eu.ensup.manageraccount.service.entity.TypeAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface AccountRepository extends JpaRepository<Account, Integer> {
    List<Account> findByType(TypeAccount type);
}