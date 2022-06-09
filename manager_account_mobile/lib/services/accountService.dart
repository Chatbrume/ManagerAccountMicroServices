import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:manager_account_mobile/entity/account.dart';

Future<List<Account>> fetchAccounts() async {
  final response =
  await http.get(Uri.parse('http://localhost:8081/manager-account/accounts/'));

  if (response.statusCode == 200) {
    final parsed = json.decode(response.body).cast<Map<String, dynamic>>();

    return parsed.map<Account>((json) => Account.fromMap(json)).toList();
  } else {
    throw Exception('Failed to load album');
  }
}

Future<Account> fetchAccount(idAccount) async {
  final response =
  await http.get(Uri.parse('http://localhost:8081/manager-account/accounts/'+idAccount));

  if (response.statusCode == 200) {
    final parsed = json.decode(response.body).cast<String, dynamic>();

    return parsed.map<Account>((json) => Account.fromMap(json));
  } else {
    throw Exception('Failed to load album');
  }
}