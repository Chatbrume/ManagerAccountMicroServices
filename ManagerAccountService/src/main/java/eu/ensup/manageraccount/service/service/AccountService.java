package eu.ensup.manageraccount.service.service;

import eu.ensup.manageraccount.service.entity.Account;
import eu.ensup.manageraccount.service.entity.TypeAccount;
import eu.ensup.manageraccount.service.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService
{
    @Autowired
    private AccountRepository accountRepository;

    public List<Account> findAll()
    {
        return accountRepository.findAll();
    }

    public List<Account> findByType(TypeAccount type)
    {
        return accountRepository.findByType(type);
    }

    public Account findById(int id)
    {
        return accountRepository.findById(id).orElse(null);
    }

    public Account save(Account account)
    {
        return accountRepository.save(account);
    }

    public boolean delete(Account account)
    {
        accountRepository.delete(account);
        return accountRepository.findById(account.getId()).orElse(null) == null;
    }

    public boolean deleteById(int id)
    {
        accountRepository.deleteById(id);
        return accountRepository.findById(id).orElse(null) == null;
    }
}
