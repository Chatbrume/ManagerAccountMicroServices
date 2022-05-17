package eu.ensup.manageraccount.service.controller;

import eu.ensup.manageraccount.service.entity.Account;
import eu.ensup.manageraccount.service.entity.TypeAccount;
import eu.ensup.manageraccount.service.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "accounts")
@CrossOrigin(origins="*", allowedHeaders="*")
public class AccountController
{
    @Autowired
    private AccountRepository accountRepository;

    @CrossOrigin
    @GetMapping(path = "/")
    public List<Account> getAll()
    {
        return accountRepository.findAll();
    }

    @CrossOrigin
    @PostMapping(path = "/")
    public Account create(@RequestBody Account account)
    {
        return accountRepository.save(account);
    }

    @CrossOrigin
    @GetMapping(path = "/{id}")
    public Account get(@PathVariable(name = "id") Integer id)
    {
        return accountRepository.findById(id).orElse(null);
    }

    @CrossOrigin
    @GetMapping(path = "/byType/{type}")
    List<Account> findByType(@PathVariable(name="type") TypeAccount type) {return accountRepository.findByType(type);}

    @CrossOrigin
    @PutMapping(path = "/{id}")
    public Account update(@PathVariable(name = "id") Integer id, @RequestBody Account account)
    {
        account.setId(id);
        return accountRepository.save(account);
    }

    @CrossOrigin
    @DeleteMapping(path = "{id}")
    public Account delete(@PathVariable(name = "id") Integer id)
    {
        Account account = accountRepository.findById(id).orElse(null);
        if( account != null ) accountRepository.deleteById(id);
        return account;
    }
}
