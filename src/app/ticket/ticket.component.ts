import { Component, OnInit } from '@angular/core';
import { TicketService } from '../service/ticket.service';
import { Ticket } from '../service/ticket.service';
import { MatTableDataSource } from '@angular/material/table';
import { isDataSource } from '@angular/cdk/collections';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'ticket-component',
  templateUrl: 'ticket.component.html'
})
export class TicketComponent implements OnInit {
  constructor(private ticketService : TicketService) { }

  columns = ["support_ticket_id", "environment_id", "ticket_subject", "ticket_description"];

  tickets : Ticket[] = [];

  ngOnInit(): void {
     this.ticketService.getTicket().subscribe((response)=> {this.tickets = response},(error) => console.log(error))
  }
}