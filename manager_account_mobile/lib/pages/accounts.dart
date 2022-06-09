import 'package:flutter/material.dart';
import 'package:manager_account_mobile/entity/account.dart';
import 'package:manager_account_mobile/services/accountService.dart';

class AccountsApp extends StatelessWidget {
  const AccountsApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: const AccountsPage(title: 'Flutter Demo Home Page'),
    );
  }
}

class AccountsPage extends StatefulWidget {
  const AccountsPage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<AccountsPage> createState() => _AccountsState();
}

class _AccountsState extends State<AccountsPage> {
  //ThemeData localTheme = Theme.of(context);

  late Future<List<Account>> futureListAccount;
  @override
  void initState() {
    super.initState();
    futureListAccount = fetchAccounts();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: FutureBuilder<List<Account>>(
        future: futureListAccount,
        builder: (context, snapshot) {
          if(snapshot.hasData && snapshot.data != null) {
            return DataTable(
              columns: [
                DataColumn(label: Text('Id')),
                DataColumn(label: Text('Discount')),
                DataColumn(label: Text('Creation date')),
                DataColumn(label: Text('Type')),
                DataColumn(label: Text('Action')),
              ],
              rows: _buildList(context, snapshot.data!.toList()),
            );
          }
          else {
            return Center(child: CircularProgressIndicator());
          }
        },
      ),
    );
  }

  List<DataRow> _buildList(BuildContext context, List<Account> datas) {
    return datas.map( (data) => _buildListItem(context, data) ).toList();
  }

  DataRow _buildListItem(BuildContext context, Account data) {
    return DataRow(cells: [
      DataCell(Text(data.id.toString())),
      DataCell(Text(data.discount.toString())),
      DataCell(Text(data.creationDate.toString())),
      DataCell(Text(data.type)),
      DataCell(Wrap(
        children: [
          TextButton(
            onPressed: () {
              debugPrint('Received click');
            },
            child: const Text("Modify"),
          ),
          OutlinedButton(
            onPressed: () {
              debugPrint('Received click');
            },
            child: const Text("Delete"),
          ),
        ],
      ),
      ),
    ]);
  }
}
