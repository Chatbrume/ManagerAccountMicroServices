package eu.ensup.manageraccount.service.controller;

import eu.ensup.manageraccount.service.entity.Account;
import eu.ensup.manageraccount.service.entity.TypeAccount;
import eu.ensup.manageraccount.service.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "accounts")
@CrossOrigin(origins="*")
public class AccountController
{
    @Autowired
    private AccountRepository accountRepository;

    @GetMapping(path = "/", produces="application/json")
    public List<Account> getAll()
    {
        return accountRepository.findAll();
    }

    @PostMapping(path = "/", produces="application/json", consumes="application/json")
    public Account create(@RequestBody Account account)
    {
        return accountRepository.save(account);
    }

    @GetMapping(path = "/{id}", produces="application/json")
    public Account get(@PathVariable(name = "id") Integer id)
    {
        return accountRepository.findById(id).orElse(null);
    }

    @GetMapping(path = "/byType/{type}", produces="application/json")
    List<Account> findByType(@PathVariable(name="type") TypeAccount type) {return accountRepository.findByType(type);}

    @PutMapping(path = "/{id}", produces="application/json", consumes="application/json")
    public Account update(@PathVariable(name = "id") Integer id, @RequestBody Account account)
    {
        account.setId(id);
        return accountRepository.save(account);
    }

    @DeleteMapping(path = "{id}", produces="application/json")
    public Account delete(@PathVariable(name = "id") Integer id)
    {
        Account account = accountRepository.findById(id).orElse(null);
        if( account != null ) accountRepository.deleteById(id);
        return account;
    }
}
